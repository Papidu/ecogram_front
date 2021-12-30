import React, {useState} from 'react'
import './userInfo.css'
import { DataGrid } from '@mui/x-data-grid';
import EditIcon from '@mui/icons-material/Edit';
import {dataTable} from '../../FakeData/data'
import {Link} from "react-router-dom";
import { width } from '@mui/system';

export default function UserInfo() {
    const [data, setData] = useState(dataTable);

    const columns = [
        { field: 'id', headerName: 'ID', width: 20 },        
        { field: 'name', headerName: 'Имя', width: 60 },
        { field: 'surname', headerName: 'Фамилия', width: 100 },
        { field: 'phone_number', headerName: 'Номер телефона', width: 160 },
        { field: 'birthday', headerName: 'День Рождение', type: 'number', width: 160},
        { field: 'role', headerName: 'Роль пользователя', width: 160},
        { field: 'action', headerName: ' ', width: 40, renderCell: (params)=>{
            return (
                <>
                    <Link to={"/user/" + params.row.id}>
                        <button>
                            <EditIcon className="editIcon"
                                        color="black" 
                                        sx={{ fontSize: 15 }}
                                        // onClick={() => handleEdit(params.row.id)}
                                />
                        </button>
                    </Link>
                </>
            )
        }},
      ];

    return (
        <div className="userinfo">
            <DataGrid
                rows={data}
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[10]}
                disableSelectionOnClick
                checkboxSelection
                sx={{width: '800px'}}
            />
        </div>
    )
}
