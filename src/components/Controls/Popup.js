import React from 'react'
import { Button, Dialog, DialogContent, DialogTitle, Typography } from '@mui/material';
import { makeStyles } from '@material-ui/styles';
import Controls from './Controls'
import './popup.css'

const useStyles = makeStyles(theme => ({
    dialogWrapper:{
        padding: '20px',
    },

    dialogTitle: {
        paddingRight:'0px',
    },
    btnClose: {
        color: 'black',
        paddingRight: '0px',
    }
}))


export default function Popup(props) {
    const {title, children, openPopup, setOpenPopup} = props;
    const classes = useStyles()
    return (
        <Dialog 
            open={openPopup}
            maxWidth="md"
            className={classes.dialogWrapper}
        >
            <DialogTitle className={classes.dialogTitle}>
                <div style={{display: 'flex'}}>
                    <Typography variant='h6' component="div" style={{flexGrow:1}}>
                        {title}
                    </Typography>
                    <Controls.Button 
                        color="primary"
                        variant="text"
                        text="X"
                        onClick= {() => setOpenPopup(false)}
                        className={classes.btnClose}
                    />
               </div>
            </DialogTitle>
            <DialogContent dividers> 
                {children}
            </DialogContent>
        </Dialog>
    )
}
