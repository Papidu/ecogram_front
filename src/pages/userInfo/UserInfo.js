import React from 'react'
import './userInfo.css'
import { DataGrid } from '@mui/x-data-grid';
import {dataTable} from '../../FakeData/data'

export default function UserInfo() {
    const columns = [
        { field: 'id', headerName: 'ID', width: 20 },        
        { field: 'firstName', headerName: 'Имя', width: 130 },
        { field: 'lastName', headerName: 'Фамилия', width: 130 },
        { field: 'phoneNumber', headerName: 'Номер телефона', width: 130 },
        { field: 'age', headerName: 'Age', type: 'number', width: 90},
        { field: 'role', headerName: 'Роль пользователя', width: 160},
      ];
    const row2 = []
    for (var item in dataTable) {
        console.log("Ключ: " + item + " значение: " + dataTable[item]);
        for(var i in dataTable[item])
        console.log("Ключ: " + i + " значение: " + dataTable[i]);
        // row2.append()
        
        // formData.append(name, user[name]);
    }
       
      const rows = [
        { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
        { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
        { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
        { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
        { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
        { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
        { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
        { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
        { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
      ];

    return (
        <div className="userinfo">
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div>
    )
}
