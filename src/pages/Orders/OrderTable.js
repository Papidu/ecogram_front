import React, {useState, useEffect} from 'react'
import { DataGrid } from '@mui/x-data-grid';
import EditIcon from '@mui/icons-material/Edit';


export default function Table(props) {
    const {setUserData, setOpenPopup, isChange, ...other} = props;
    const [tableData, setTableData] =useState([])  

    const columns = [
        { field: 'id', headerName: 'ID', width: 20 },        
        { field: 'user_name', headerName: 'Заказчик имя',width: 120 },
        { field: 'user_surname', headerName: 'Заказчик фам.', width: 160 },
        // { field: 'user_phone_number', headerName: 'Номер телефона заказчика', width: 160 },
        { field: 'thrash_type', headerName: 'Что вывозят',width: 170 },
        { field: 'price', headerName: 'Цена',width: 100 },
        { field: 'courier_name', headerName: 'Курьер имя',width: 110 },
        { field: 'courier_surname', headerName: 'Курьер фам.', width: 160 },
        { field: 'courier_phone_number', headerName: 'Телефона курьера', width: 180 },
        { field: 'create_date', headerName: 'Когда забрать', type: 'number', width: 160},
        { field: 'status', headerName: 'Статус заказа', width: 160},
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
        const url = 'http://vm-fd0ab233.na4u.ru:8080/delivery/requests'
        const header = {            
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            // credentials: 'same-origin', // include, *same-origin, omit
            body: JSON.stringify({}),
            headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        }}
        const getOrder=async () =>{
            try{
                const table = await fetch(url, header);
                const json = await table.json();
                console.log(json)
                setTableData(json)
            } catch (e){
                console.log(e)
            }
        }
        getOrder()

    }, [])

    const openInPopup = (id) =>{
        console.log(id)
        setUserData(tableData.find(item => item.id === id))
        setOpenPopup(true)
        console.log('openInPopup ',tableData.find(item => item.id === id))
    }
    


    return (
        <DataGrid
                rows={tableData}
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[10]}
                disableSelectionOnClick
                checkboxSelection
                sx={{width: '98%',}}
            />
    )
}
