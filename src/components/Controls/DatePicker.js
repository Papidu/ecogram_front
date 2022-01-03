import React from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './datepicker.css'
export default function DatePickers(props) {

    const {name, label, value, onChange} = props

    return (
        <DatePicker 
            dateFormat='yyyy-MM-dd'
            selected={value} 
            name={name}
            // label={label}
            onChange={onChange}
            showYearDropdown
            scrollableMonthYearDropdown
            className='datePic'
        >
        {console.log('dasdasdasda', value)}
        {console.log('b', name)}
        {console.log('dasdasdasda', label)}
        </DatePicker>
        
    )
}
