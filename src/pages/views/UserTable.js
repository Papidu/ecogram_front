import React from 'react'
import Headers from '../../components/Headers'
import {Button, Grid,ButtonGroup} from "@mui/material" 
import Content from '../../components/Content'
function UserTable() {
    const sideBar = [ 'Пользователь', 'Заказы', 'Публикации']
    return (
       <Grid container direction='column'>
           <Grid item>
               <Headers/>
           </Grid>
           <Grid item container>
               <Grid item xs={1} 
                    sm={2}
                    container 
                    direction='column' 
                    style={{ background: '#FFF', justifyContent: 'space-around' }}
                    // spacing={3}
                >
                    <ButtonGroup
                        orientation="vertical"
                        aria-label="vertical contained button group"
                        variant="text"
                        style={{justifyContent: 'start' }}
                    >
                        {sideBar.map((item) => {
                            return(
                            <Grid item >
                                <Button variant="text" style={{width:'100%', color: 'black'}}> {item} </Button>
                            </Grid>
                        )})}
                    </ButtonGroup>
               </Grid>
               <Grid item xs={12} sm={8}  style={{ background: '#FFF' }}>
               </Grid>
               <Grid item xs={false} sm={2}/> 
           </Grid>
           <Grid item container>
               <Grid item xs={1} 
                    sm={2}
                    container 
                    direction='column' 
                    style={{ background: '#FFF', justifyContent: 'space-around' }}
                    // spacing={3}
                >
               </Grid>
               <Grid item xs={12} sm={8}  style={{ background: '#FFF' }}>
                    <Content/>
               </Grid>
               <Grid item xs={false} sm={2}/> 
           </Grid>
       </Grid>
    )
}

export default UserTable


 // <Grid item>
        //     <Headers/> 
            
            
        //     <div>
        //         <h1>UserTable</h1>
        //     </div>
        // </Grid>   