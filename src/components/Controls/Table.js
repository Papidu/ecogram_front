import React, {useState, useEffect} from 'react'
import { DataGrid } from '@mui/x-data-grid';
import {dataTable} from '../../FakeData/data'
import EditIcon from '@mui/icons-material/Edit';




export default function Table(props) {
    const {setUserData, setOpenPopup,isChanged, ...other} = props;
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
        setTableData(dataTable)
    }, [isChanged])

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
