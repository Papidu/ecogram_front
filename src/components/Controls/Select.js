import React from 'react'
import {FormControl, MenuItem, InputLabel,Select as MuiSelect} from "@mui/material" 

export default function Select(props) {
    const {name, label, value, onChange, options} = props
    return (
        <FormControl
            variant='outlined'                        
        >
            <InputLabel>Роль</InputLabel>
            <MuiSelect
                name={name}
                label={label}
                value= {value}
                onChange={onChange}
            >
                {options.map(
                    item => (<MenuItem key={item.id} value={item.id}> {item.role}</MenuItem>)
                )}
            </MuiSelect>
        </FormControl>
    )
}
