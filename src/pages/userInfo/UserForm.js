import React, {useState, useEffect} from 'react'
import {Grid} from "@mui/material" 
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {fakeRole} from '../../FakeData/data';
import {dataTable} from '../../FakeData/data'
import Popup from '../../components/Controls/Popup';
import {useForm, Form} from '../../components/Controls/useForm';
import Controls from '../../components/Controls/Controls'
import * as userService from '../../services/userService' 
import {makeStyles} from "@mui/styles"


const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiFormControl-root': {
            width: "80%",
            margin: '5px'
        }
    },
    btn:{
        margin: '5px',
    },
    label: {
        textTransform:'none'
    }
}))

const postUser= async (data) =>{
    const url = 'http://vm-fd0ab233.na4u.ru:8080/users/update';
    const header = {            
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        // mode: 'cors', // no-cors, *cors, same-origin
        // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        // credentials: 'include', // include, *same-origin, omit
        body: JSON.stringify(data),
        headers: {
        'Content-Type': 'application/json'
    }}

    try{
        const response = await fetch(url, header);
        const json = await response.json();
        console.log(json)
        // setTableData(json)
    } catch (e){
        console.log('Ошибка ', e)
    }
}
export default function UserForm(props) {
    const {userData=initialVlaues,setOpenPopup,setisChanged,...other} = props;
    
    const initialVlaues = {
        id: 0,
        phone_number: "",
        username: "",
        name: "",
        surname: "",
        birthday: new Date('2021-12-30'),//new Date(),
        role: "basic_user"
    }
    
    function setTables(item){
        dataTable.forEach(item1 => {
            if (item1.id === item.id) {
                item1.role= item.role
                // postUser()
                return true;
            }else return false
        });
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        if(validate()){
            postUser([values])
            setOpenPopup(false)
            setisChanged(true)
        }
    }

    const classes= useStyles()

    function validate(fieldValues = values){
        let temp = {...errors}
        if('name' in fieldValues)
            temp.name= fieldValues.name?"": 'Обязательное поле';
        if('surname' in fieldValues)
            temp.surname= fieldValues.surname?"": 'Обязательное поле';
        if('phone_number' in fieldValues)
            temp.phone_number = fieldValues.phone_number.length > 9?"": 'Обязательное поле и минимум 11';
        // temp.role = "basic_user";
        setErrors({
            ...temp
        })
        if(fieldValues == values)
            setisChanged(true) /////////////////////////////////////////////////////////// ОТправить на сервер данные в таблице
            // console.log('isCh ', isChanged)
            return Object.values(temp).every(x => x== "")
    }

    const {
        values,
        setValues,
        handleInputChange,
        handleInputChangeRole,
        handlerChangeData,
        errors,
        setErrors,
    } = useForm(userData, true, validate)

    
    const [startDate, setStartDate] = useState(null);
    return (
        <Form onSubmit={handleSubmit}>
            {console.log('userform, values = ', values)}
            <Grid container>
                <Grid item xs={6}>
                    <Controls.Input
                        label="Имя"
                        name='name'
                        value= {values.name}
                        onChange={handleInputChange} 
                        error={errors.name}
                        disabled
                    />
                    <Controls.Input
                        label="Фамилия"
                        name='surname'
                        value= {values.surname}
                        onChange={handleInputChange}
                        error={errors.surname}
                        disabled
                    />
                    <Controls.Input
                        label="Телефон"
                        name='phone_number'
                        value= {values.phone_number}
                        onChange={handleInputChange}
                        error={errors.phone_number}
                        disabled
                    />
                </Grid>
                <Grid item xs={6}>
                    <Controls.Select
                        name='role'
                        label='Роль'
                        // displayEmpty
                        value= {userService.getRoleCollection().find(r => r.role === values.role).id}
                        onChange={handleInputChangeRole}
                        options={userService.getRoleCollection()}
                    />  
                    <DatePicker 
                        dateFormat='yyyy-MM-dd'
                        selected={new Date(values.birthday)} 
                        name='birthday'
                        onChange={(date) => handlerChangeData(date)}
                        showYearDropdown
                        scrollableMonthYearDropdown
                        className='datePic'
                        disabled
                    />
                                      
                </Grid>
                <Controls.Button 
                        type='submit'
                        text='Изменить' 
                        classes={{root:classes.btn,label:classes.label}}
                />
            </Grid>           
        </Form>
    )
}
