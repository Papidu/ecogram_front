import React, {useEffect, useState} from 'react'
import './userInfo.css'
import { DataGrid } from '@mui/x-data-grid';
import {
    useGridApiRef,
    DataGridPro,
    GridToolbarContainer,
    GridActionsCellItem
  } from "@mui/x-data-grid-pro";
import SaveIcon from "@mui/icons-material/Save";
import EditIcon from '@mui/icons-material/Edit';
import {dataTable} from '../../FakeData/data'
import UserForm from '../userInfo/UserForm'
import Popup from '../../components/Controls/Popup';
import * as userService from '../../services/userService' 
import Controls from '../../components/Controls/Controls'
export default function UserInfo() {

    const [data, setData] = useState(dataTable);
    const [userData, setUserData] = useState();
    const [isChanged, setisChanged] = useState(false)
    const [openPopup, setOpenPopup] = useState(false)
    const [edit, setEdit] = useState(dataTable)
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
    
    const openInPopup = (id) =>{
        console.log(id)
        setUserData(data.find(item => item.id === id))
        setOpenPopup(true)
        console.log(data.find(item => item.id === id))
    }

    const Edit =(user) =>{
        // userService
    }

    return (
        <div className="userinfo">
            {/* <DataGrid
                rows={data}
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[10]}
                disableSelectionOnClick
                checkboxSelection
                sx={{width: '800px'}}
            /> */}
            <Controls.Table setUserData={setUserData} setOpenPopup={setOpenPopup}/>
            <Popup
                title="Редактирование пользователя"
                openPopup= {openPopup}
                setOpenPopup= {setOpenPopup}
            >
                <UserForm userData={userData} 
                          setisChanged={setisChanged} 
                          setUserData={setUserData} 
                          setOpenPopup={setOpenPopup} 
                />
            </Popup> 
        </div>
    )
}
