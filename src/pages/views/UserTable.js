import React from 'react'
import Headers from '../../components/Headers'
import {Button, Grid,ButtonGroup, Container} from "@mui/material" 
import Content from '../../components/Content'
function UserTable() {
    const sideBar = [ 'Пользователь', 'Заказы', 'Публикации']
    return (
       <>
        <Container direction='row' xs={2} >
            <Content/>
        </Container> 
       </>
    )
}

export default UserTable




// <Container sx={{ flexGrow: 2 }} xs={2}>
//                 <ButtonGroup
//                     orientation="vertical"
//                     aria-label="vertical contained button group"
//                     variant="text"
//                     style={{justifyContent: 'start' }}
//                 >
//                     {sideBar.map((item) => {
//                         return(
//                         <Grid item >
//                             <Button variant="text" style={{width:'100%', color: 'black'}}> {item} </Button>
//                         </Grid>
//                     )})}
//                 </ButtonGroup>
//             </Container>