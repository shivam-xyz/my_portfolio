import { Card, Grid, Typography } from '@mui/material';
import React from 'react';
import meta from '../assets/images/meta.png';

const Certification = () => {
    const arrCertifications = [
        {
            sn: 1,
            title: 'Frontend',
            description: 'Meta (Facebook) by Coursera',
            image: meta
        },
        {
            sn: 2,
            title: 'Internship',
            description: 'Tomestry',
            image: meta
        },
        {
            sn: 3,
            title: 'Full Stack Web & App Development',
            description: 'BadiDukkan',
            image: meta
        }
    ]
    return (
        <Grid container sx={{ mt: 5, }} spacing={2}>
            <Grid item xs={12}>
                <Typography variant='h4' textAlign="center">
                    Certifications
                </Typography>
            </Grid>
            {
                arrCertifications.map((certificate) => {
                    return (
                        <>
                            <Grid item xs={12} sm={6}>
                                <Card sx={[{ p: 1, mb: 2 }, (theme) => ({ '&:hover': { background: 'linear-gradient(180deg, rgba(67,58,238,1) 0%, rgba(148,148,242,1) 42%, rgba(220,229,247,1) 100%)' } })]} >
                                    <Grid container>
                                        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                                            <img src={meta} alt="image" width={200} height={200} />
                                        </Grid>
                                    </Grid>
                                    <Typography variant='h6' fontWeight={700} textAlign='center'>
                                        {certificate.title}
                                    </Typography>
                                    <Typography variant='h6' fontWeight={700} textAlign='center'>
                                        - {certificate.description}
                                    </Typography>
                                </Card>
                            </Grid>
                        </>
                    )
                })
            }
        </Grid>
    )
}

export default Certification