import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';



function Headers() {
  return (
    <>
    <div className='bg-dark' style={{position:'relative'}}>
        <Box sx={{ flexGrow: 1 }} className='bg-dark'>
          <AppBar position="static" className='bg-dark'>
            <Toolbar>
             
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <h4 className='logo'>RENTIFY</h4>
              </Typography>
              <Button color="inherit">Login</Button>
            </Toolbar>
          </AppBar>
        </Box>
    </div>
    </>
  )
}

export default Headers