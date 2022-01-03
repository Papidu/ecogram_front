import React, {useState} from 'react'
import {makeStyles} from "@mui/styles"
import {fakeRole} from '../../FakeData/data';

export function useForm(initialVlaues, validateOnChange=false, validate) {

 
    const [values, setValues] = useState(initialVlaues)
    const [errors, setErrors] = useState({})
    const handleInputChange = (e) => {
        const {name, value} = e.target
        setValues({
            ...values,
            [name]: value
        })
        if(validateOnChange){
            validate({[name]: value})
        }
    }
    const handleInputChangeRole = (e) => {
        const {name, value} = e.target
        console.log(name, value)
        const role = fakeRole.find(r => r.id === value).role
        console.log(name, role)
        setValues({
            ...values,
            [name]: role
        })
    }
    function formatDate (date) {
        let year = date.getFullYear();
        let month = (date.getMonth() == 0 || date.getMonth() == 11? date.getMonth()+1: date.getMonth()+1).toString();
        month = month.length === 2 ? month.toString(): month.padStart(2,'0');
        let day = date.getDate() < 10? (date.getDate()).toString().padStart(2,'0'): date.getDate().toString();
        return year+'-'+ month + '-' + day;
    }
    const handlerChangeData = (data) =>{
        console.log(data)
        const date = formatDate(data)
        console.log(date)
        // console.log(values.birthday)
        setValues({
            ...values,
            ['birthday']: new Date(date)
        })
    }
    
    
    return {
        values,
        setValues,
        handleInputChange,
        handleInputChangeRole,
        handlerChangeData,
        errors,
        setErrors,
    }
}

const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiFormControl-root': {
            width: "80%",
            margin: '5px'
        }
    },
}))


// autoComplete='off'
export function Form(props) {

    const classes = useStyles();
    const {children, ...other} = props;

    return (
        <form className={classes.root} {...other}>
            {children}
        </form>
    )
}
