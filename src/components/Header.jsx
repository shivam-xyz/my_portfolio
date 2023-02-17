import React from 'react'
import AppBar from '@mui/material/AppBar';
import { Toolbar, Typography } from '@mui/material';

const Header = () => {
  return (
    <>
        <AppBar>
            <Toolbar sx={{justifyContent:'center'}}>
                <Typography variant='h5' fontWeight={700}>{"< "}Shivam Singh{" />"}</Typography>
            </Toolbar>
        </AppBar>
    </>
  )
}

export default Header