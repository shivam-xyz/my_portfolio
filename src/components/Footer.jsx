import FavoriteIcon from '@mui/icons-material/Favorite';
import { Grid } from '@mui/material';
import React from 'react';

const Footer = () => {
    return (
        <Grid container sx={{ mt: 6 }}>
            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }} textAlign='center'>
                Made with {<FavoriteIcon sx={{ color: 'red' }} />} By Shivam Singh
            </Grid>
        </Grid>
    )
}

export default Footer