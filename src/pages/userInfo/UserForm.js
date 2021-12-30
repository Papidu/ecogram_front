import React, {useState, useEffect} from 'react'
import {Button, Grid,ButtonGroup, Container, TextField} from "@mui/material" 
import {makeStyles} from "@mui/styles"
// import { DatePicker, LocalizationProvider } from '@mui/lab';
// import DateAdapter from '@mui/lab/AdapterDateFns';




const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiFormControl-root': {
            width: "80%",
            margin: '5px'
            
        }
        
    }
}))


export default function UserForm() {
    
    const initialVlaues = {
        id: 0,
        phone_number: "",
        username: "",
        name: "",
        surname: "",
        birthday: "2022-01-10",
        role: ""
    }

    

    const handleInputChange = (e) => {
        const {name, value} = e.target
        setValues({
            ...values,
            [name]: value
        })
    }

    const convertToDefEventParams = (name,value) => ({
        target: {
            name,value
        }
    })
    
    const classes= useStyles()
    const [values, setValues] = useState(initialVlaues)
    return (
        <form className={classes.root}>
            <Grid container>
                <Grid item xs={6}>
                    <TextField 
                        variant="outlined"
                        label="Имя"
                        name='name'
                        value= {values.name}
                        onChange={handleInputChange}
                    />
                    <TextField 
                        variant="outlined"
                        label="Фамилия"
                        name='surname'
                        value= {values.surname}
                        onChange={handleInputChange}
                    />
                    <TextField 
                        variant="outlined"
                        label="Телефон"
                        name='phone_number'
                        value= {values.phone_number}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField 
                        variant="outlined"
                        label="Роль"
                        name='role'
                        value= {values.role}
                        onChange={handleInputChange}
                    />

                    {/* <LocalizationProvider dateAdapter={DateAdapter}>
                        <TextField
                                label="День рождение"
                                type="date"
                                name='birthday'
                                value={values.birthday}
                                format='YYYY-MM-DD'
                                onChange={date => handleInputChange(convertToDefEventParams(values.birthday,date))}
                                // defaultValue="2017-05-24"
                                // sx={{ width: 220 }
                        />
                    </LocalizationProvider>
                    <LocalizationProvider dateAdapter={DateAdapter}>
                        <DatePicker
                            label="Basic example"
                            value={values.birthday}
                            onChange={(newValue) => {
                                setValues(newValue);
                            }}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider> */}
                    {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                            label="Basic example"
                            value={values.birthday}
                            onChange={handleInputChange}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider> */}
                </Grid>
            </Grid>
        </form>
    )
}
