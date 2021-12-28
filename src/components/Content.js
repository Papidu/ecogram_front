import React, {useEffect} from 'react'
import ListItem from '@mui/material/ListItem';
import { FixedSizeList } from 'react-window'
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { ListItemButton } from '@mui/material';

function renderRow(props) {
    const { index, style } = props;
  
    return (
    //   <ListItem style={style} key={index} component="div" disablePadding>
        <ListItem
            key={index}
            secondaryAction={
            <IconButton edge="end" aria-label="delete">
                <DeleteIcon />
            </IconButton>
            }
        >
           <ListItemButton>
                    Single-line item
           </ListItemButton>
        </ListItem>
    );
  }
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI5OTk5OTk5OSIsImV4cCI6MTY0MDY5MTI1Mn0.5cm5ajT48qHDOONRXzQPV2tyd1CYbGgOewb6GlQqekI'
    
const Login = async () => {
    const all_url = 'http://vm-fd0ab233.na4u.ru:8080/auth/token';
    const headrGet = { 
        method: 'post',
        mode:'no-cors',
    
        body: {
            username: '99999999',
            password: '1'
        }
        
    }
    fetch(all_url,headrGet)
    .then((response) => {
    return response.json();
    })
    .then((data) => {
        console.log(data);
    });    
}
async function Test(){
    const url = 'http://vm-fd0ab233.na4u.ru:8080/auth/token';
    const user = {
        username: '99999999',
        password: '1'
      };
    const formData  = new FormData();

    for(const name in user) {
        console.log(name, user[name]);
        formData.append(name, user[name]);
    }
    console.log(formData.getAll('username'));
    const response = await fetch(url, {
        method: 'POST',
        mode:'no-cors',
        body: formData
      }).then(function (res) {
        if (res.status===200) {
         
          alert("Perfect! ");
        } else if (res.status === 401) {
          alert("Oops! ");
        }
      }, function (e) {
        alert("Error submitting form!");
      });

    
}

function Content() {
    useEffect(() => {
        Test()
        // Login()
        // const all_url = 'http://vm-fd0ab233.na4u.ru:8080/users';
        // const headrGet = { 
        //     method: 'GET',
        //     mode:'no-cors',
        //     credentials: 'include', // It can be include, same-origin, omit credentials: 'include'
        //     headers: {
        //         'Content-Type': 'application/json', // Your headers
        //         'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI5OTk5OTk5OSIsImV4cCI6MTY0MDY4OTU2N30.XrLG0oUGD_SwturRpXx5BrwMW9ivfZTD12h11_a-C38'

        //         // 'Token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI5OTk5OTk5OSIsImV4cCI6MTY0MDYzODEyOX0.R0Wnrte0Xcv3-q8yfTMGY8k_xKKtYe8cZdI9sT257V0'
        //     }}
        // try {
        //     const response = await fetch(all_url,headrGet);
        //     const json = await response.json();
        //     console.log(json)  
        // } catch (error) {
        //     console.log('error',error);
        // } finally {

        // }
        
    }, [])
    return (
        <FixedSizeList
            height={400}
            // width={360}
            itemSize={5}
            itemCount={6}
            overscanCount={5}
            style={{borderWidth: 10, backgroundColor: 'gold'}}
        >
            {renderRow}
        </FixedSizeList>
    )
}

export default Content

// function Content2(){
    

// }