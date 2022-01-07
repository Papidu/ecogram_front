import React from 'react'
import {Grid, FormControl, MenuItem, InputLabel,Select} from "@mui/material" 
import "react-datepicker/dist/react-datepicker.css";
import {fakeStatus, getStatusCollection} from '../../FakeData/data';
import Controls from '../../components/Controls/Controls'
import { useForm2,Form } from './useForm2';
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

    const updateOrder= async (data) =>{
        const url = 'http://vm-fd0ab233.na4u.ru:8080/delivery/requests/update';
        const header = {            
            method: 'POST',
            body: JSON.stringify([data]),
            headers: {
            'Content-Type': 'application/json'
        }}       
        try{
            const response = await fetch(url, header);
            const json = await response.json();
            const statuss= response.status;
            console.log("response.status", json)
            console.log("response.status", statuss)
            // setTableData(json)
        } catch (e){
            console.log('Ошибка ', e)
        }
    }
    const getStatus = async()=>{
        const url = 'http://vm-fd0ab233.na4u.ru:8080/statuses';
        const header = {            
            method: 'GET',
            headers: {
            'Content-Type': 'application/json'
        }}

        try{
            const response = await fetch(url, header);
            const json = await response.json();
            console.log('getStatus ', json)
        } catch (e){
            console.log('Ошибка ', e)
        }
    }
export default function OrderForm(props) {
    const {orderData=initialVlaues,setOpenPopup,setisChanged,...other} = props;
    
    
    const initialVlaues = {
        'delivery_address': "Добрый 77",
        'id': 44,
        'price': 200,
        'status': "в ожидании"
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log('handleSubmit')
        // if(validate()){
        let data = {
            'delivery_address': values.delivery_address,
            'id_req': values.id,
            'price': values.price,
            'status': values.status
        }    
            updateOrder(data) 
            console.log('validate', data)            
            setOpenPopup(false)
            setisChanged(true)
        // }
    }

    const classes= useStyles()

    function validate(fieldValues = values){
        let temp = {...errors}
        if('delivery_address' in fieldValues)
            temp.name= fieldValues.name?"": 'Обязательное поле';
        if('price' in fieldValues)
            temp.price= fieldValues.price?"": 'Обязательное поле';
        setErrors({
            ...temp
        })
        if(fieldValues == values)
            setisChanged(true) /////////////////////////////////////////////////////////// ОТправить на сервер данные в таблице
            // console.log('isCh ', isChanged)
            return Object.values(temp).every(x => x== "")
    }
    const handleInputStatus = (e) => {
        const {name, value} = e.target
        console.log(name, value)
        const status = fakeStatus.find(r => r.id === value).status_name
        console.log('handleInputStatus ',name, status)
        setValues({
            ...values,
            [name]: status
        })
    }
    const {
        values,
        setValues,
        handleInputChange,
        handleInputChangeRole,
        handlerChangeData,
        errors,
        setErrors,
    } = useForm2(orderData, true, validate)

    return (
        <Form onSubmit={handleSubmit}>
            {/* {console.log('order, values = ', values)} */}
            <Grid container>
                <Grid item xs={6}>
                    <Controls.Input
                        label="Адрес доставки"
                        name='delivery_address'
                        value= {values.delivery_address}
                        onChange={handleInputChange} 
                        error={errors.delivery_address}
                        disabled
                    />
                    <Controls.Input
                        label="price"
                        name='surname'
                        value= {values.price}
                        onChange={handleInputChange}
                        error={errors.price}
                        disabled
                    />
                </Grid>
                <Grid item xs={6}>
                    <FormControl
                        variant='outlined'                        
                    >
                        <InputLabel>'Статус заказа'</InputLabel>
                        <Select
                            name='status'
                            label= 'Статус заказа'
                            value= {getStatusCollection().find(r => r.status_name === values.status).id}
                            onChange={handleInputStatus}
                        >
                            {getStatusCollection().map(
                                item => (<MenuItem key={item.id} value={item.id}> {item.status_name}</MenuItem>)
                            )}
                        </Select>
                    </FormControl>                                      
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
