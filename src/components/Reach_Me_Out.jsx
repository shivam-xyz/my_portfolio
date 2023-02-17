import { Avatar, Box, Button, Card, Container, Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import my_image from '../assets/images/me1.jpg';
// import GitHubIcon from '@mui/icons-material/GitHub';
import AssignmentIcon from '@mui/icons-material/Assignment';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import GitHubIcon from '@mui/icons-material/GitHub';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import GTranslateRoundedIcon from '@mui/icons-material/GTranslateRounded';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SubdirectoryArrowRightIcon from '@mui/icons-material/SubdirectoryArrowRight';
import TwitterIcon from '@mui/icons-material/Twitter';
import css from '../assets/images/css.png';
import django from '../assets/images/django.png';
import flutter from '../assets/images/flutter.png';
import html from '../assets/images/html.png';
import javascript from '../assets/images/javascript2.png';
import mongodb from '../assets/images/mongodb.png';
import node from '../assets/images/node3.png';
import python from '../assets/images/python.png';
import react from '../assets/images/react1.png';
import restapi from '../assets/images/restapi4.png';
import techBanner from '../assets/images/techBanner.png';
import meta from '../assets/images/meta.png'
import FavoriteIcon from '@mui/icons-material/Favorite';
import Self_Intro from './Self_Intro';
import What_i_do from './What_i_do';
import Projects from './Projects';
import Certification from './Certification';

const Reach_Me_Out = () => {
  return (
    <Grid container sx={{ mt: 5 }}>
                <Grid item xs={12}>
                    <Typography variant='h4' textAlign='center'>Reach Out to me!</Typography>
                </Grid>
                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Avatar src={my_image} sx={{ height: '150px', width: '150px' }} alt='image' />
                </Grid>
                <Grid item xs={12}>
                    <Typography textAlign='center' fontWeight='bold'>
                        DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR ALL.
                    </Typography>
                    <Typography textAlign='center' variant='body2'>
                        Full Stack Web Developer | Flutter Based App Developer
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 1 }}>
                        <Avatar sx={{ backgroundColor: 'black', mr: 1 }} >
                            <GitHubIcon />
                        </Avatar>
                        <Avatar sx={{ backgroundColor: 'blue', mr: 1 }} >
                            <LinkedInIcon />
                        </Avatar>
                        <Avatar sx={{ backgroundColor: "brown", mr: 1 }} >
                            <GTranslateRoundedIcon />
                        </Avatar>
                        <Avatar sx={{ backgroundColor: 'orange', mr: 1 }} >
                            <FacebookRoundedIcon />
                        </Avatar>
                        <Avatar sx={{ backgroundColor: 'blue' }} >
                            <TwitterIcon />
                        </Avatar>
                    </Box>
                    <Typography textAlign='center'>
                        VP Homes, Silver Line, BBD University, Lucknow, U.P (226028)
                    </Typography>
                </Grid>
            </Grid>
  )
}

export default Reach_Me_Out