import React from 'react'
import SVGLogo from '../img/SVGcomponents/Logo'
// import SVGMail from '../img/SVGcomponents/Mail'
// import SVGNotification from '../img/SVGcomponents/Notification'
// import SVGProfile from '../img/SVGcomponents/Profile'
import {AppBar, Toolbar, Typography,Box, IconButton,Badge} from "@mui/material" 
// import {AccountCircle,NotificationsIcon, MoreIcon} from '@mui/icons-material'
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';

const useStyles = {
    appBarStyle: {
        backgroundColor: '#E7E7E7',
    },
}
const Headers = (props) => {
  const {countMail=0, countNotific=0 } = props 
    return (
        <AppBar position="static" style={useStyles.appBarStyle}>
            <Toolbar>
                <SVGLogo height={20} width={40} />
                <Typography color='black' component="div" sx={{ flexGrow: 2 }}>Админ панель</Typography>
                <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                <Badge badgeContent={countMail} color="error">
                  <MailIcon color='action' />
                </Badge>
              </IconButton>
              <IconButton
                size="large"
                color="inherit"
              >
                <Badge badgeContent={countNotific} color="error">
                  <NotificationsIcon color='action'/>
                </Badge>
              </IconButton>
              <IconButton
                size="large"
                edge="end"
                aria-haspopup="true"
                color="inherit"
              >
                <AccountCircle color='action'/>
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
    )
}

export default Headers