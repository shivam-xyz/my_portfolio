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

const What_i_do = () => {
    const whatIDo = [
        {
            sn: 1,
            image: react,
            title: 'React'
        },
        {
            sn: 2,
            image: node,
            title: 'Node'
        },
        {
            sn: 3,
            image: flutter,
            title: 'Flutter'
        },
        {
            sn: 4,
            image: django,
            title: 'Django'
        },
        {
            sn: 5,
            image: mongodb,
            title: 'MongoDB'
        },
        {
            sn: 6,
            image: restapi,
            title: 'RestApis'
        },
        {
            sn: 7,
            image: python,
            title: 'Python'
        },
        {
            sn: 8,
            image: html,
            title: 'HTML'
        },
        {
            sn: 9,
            image: css,
            title: 'CSS'
        },
        {
            sn: 10,
            image: javascript,
            title: 'JavaScript'
        }
    ];
  return (
    <Grid container wrap='wrap-reverse' sx={{ mt: 7 }}>
                <Grid item xs={12} sm={6}>
                    <img src={techBanner} alt="banner" width={'100%'} />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography variant='h4' textAlign="center">
                        What i do
                    </Typography>
                    <Typography variant="subtitle2" textAlign="center">
                        HANDLING FULL OPERATION FROM FRONTEND BACKEND AND APP
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
                        {
                            whatIDo.map((unit) => {
                                return (
                                    <Box key={unit.sn} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '10px' }}>
                                        <Avatar
                                            variant='square'
                                            src={unit.image} sx={{ backgroundColor: 'transparent' }} />
                                        <Typography textAlign={"center"}>
                                            {unit.title}
                                        </Typography>
                                    </Box>
                                )
                            })
                        }
                    </Box>
                    <Box sx={{ mt: 2 }}>
                        <span style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start', marginBottom: '10px' }}>
                            <GpsFixedIcon />
                            <Typography variant='body2'>
                                Designing and developing responsive websites
                            </Typography>
                        </span>
                        <span style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start', marginBottom: '10px' }}>
                            <GpsFixedIcon />
                            <Typography variant='body2'>
                                Best in make fast Backend with Rest Api, Reduce process time and increase efficiency.
                            </Typography>
                        </span>
                        <span style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start', marginBottom: '10px' }}>
                            <GpsFixedIcon />
                            <Typography variant='body2'>
                                Best in creating Mobile Apps by considering UX/UI
                            </Typography>
                        </span>
                        <span style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start', marginBottom: '10px' }}>
                            <GpsFixedIcon />
                            <Typography variant='body2'>
                                Can handler full construction of website frontend , backend and App with all requirements.
                            </Typography>
                        </span>
                    </Box>
                </Grid>
            </Grid>
  )
}

export default What_i_do