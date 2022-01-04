import React, {useState, useEffect} from 'react'
import { DataGrid } from '@mui/x-data-grid';
import {dataTable} from '../../FakeData/data'
import EditIcon from '@mui/icons-material/Edit';




export default function Table(props) {
    const {setUserData, setOpenPopup, ...other} = props;
    const [tableData, setTableData] =useState([])
    
    
    const columns = [
        { field: 'id', headerName: 'ID', width: 20 },        
        { field: 'name', headerName: 'Имя',width: 60 },
        { field: 'surname', headerName: 'Фамилия', width: 100 },
        { field: 'phone_number', headerName: 'Номер телефона', width: 160 },
        { field: 'birthday', headerName: 'День Рождение', type: 'number', width: 160},
        { field: 'role', headerName: 'Роль пользователя', width: 160},
        { field: 'action', headerName: ' ', width: 40, renderCell: (params)=>{
            return (
                <button>
                    <EditIcon className="editIcon"
                                color="black" 
                                sx={{ fontSize: 15 }}
                                onClick={() => openInPopup(params.row.id)}
                        />
                </button>
            )
        }
    },    
    ];

    useEffect(() => {
    //    fetch
    const url = 'http://vm-fd0ab233.na4u.ru:8080/users';
    const header = {            
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
    }}
        const getUser=  () =>{
            try{
                fetch(url, header)
                    .then((data) => data.json())
                    .then((data) => setTableData(data))
                // const table = await fetch(url, header);
                // const json = await table.json();
                // console.log(json)
                // setTableData(json)
            } catch (e){
                console.log(e)
            }
        }
        getUser()

    }, [])

    const openInPopup = (id) =>{
        console.log(id)
        setUserData(tableData.find(item => item.id === id))
        setOpenPopup(true)
        console.log(tableData.find(item => item.id === id))
    }
    


    return (
        <DataGrid
                rows={tableData}
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[10]}
                disableSelectionOnClick
                checkboxSelection
                sx={{width: '800px'}}
            />
    )
}
