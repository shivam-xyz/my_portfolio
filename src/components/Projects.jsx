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

const Projects = () => {
    const arrProjects = [
        {
            sn: 1,
            title: 'Wear365 Backend',
            description: 'Node Backend, MongoDB, and RestApi',
            workMode: 'Made Alone',
            gitUrl:'https://github.com/shivam-xyz/wear365',
            outputLevel: 'Satisfied'
        },
        {
            sn: 2,
            title: 'BoAt Clone',
            description: 'React Frontend, Node Backend, MongoDB, and RestApi',
            workMode: 'Made Alone',
            outputLevel: 'Satisfied'
        },
        {
            sn: 3,
            title: 'Yummy Food E-commerce',
            description: 'React Frontend, Node Backend, MongoDB, and RestApi',
            workMode: 'Made Alone',
            gitUrl: 'https://github.com/shivam-xyz/yummy-food',
            outputLevel: 'Satisfied'
        },
        {
            sn: 4,
            title: 'Whatsapp UI Clone',
            description: 'React Frontend, Mui Css Framework',
            workMode: 'Made Alone',
            gitUrl:'https://github.com/shivam-xyz/whatsapp',
            outputLevel: 'Satisfied'
        },
        {
            sn: 5,
            title: 'Foddy Restaurant FrontEnd',
            description: 'React Frontend, Mui Css Framework',
            workMode: 'Made Alone',
            gitUrl:'https://github.com/shivam-xyz/foddy',
            outputLevel: 'Satisfied'
        },
        {
            sn: 6,
            title: 'Calculator (working)',
            description: 'React Frontend, Mui Css Framework',
            workMode: 'Made Alone',
            gitUrl:'https://github.com/shivam-xyz/calculator',
            outputLevel: 'Satisfied'
        },
        {
            sn: 7,
            title: 'Tyke',
            description: 'React Frontend, Mui Css Framework',
            workMode: 'Made Alone',
            gitUrl:'https://github.com/shivam-xyz/tyke',
            outputLevel: 'Satisfied'
        },
        {
            sn: 8,
            title: 'Search Image on Internet',
            description: 'React Frontend, Mui Css Framework, 3rd party image collection api',
            workMode: 'Made Alone',
            gitUrl:'https://github.com/shivam-xyz/Image_Search',
            outputLevel: 'Satisfied'
        },
        {
            sn: 9,
            title: 'My Portfolio Code',
            description: 'React Frontend, Mui Css Framework',
            workMode: 'Made Alone',
            gitUrl:'https://github.com/shivam-xyz/my_portfolio',
            outputLevel: 'Satisfied'
        },
        {
            sn: 9,
            title: 'wear365 Frontend',
            description: 'React Frontend, Mui Css Framework',
            workMode: 'Made Alone',
            gitUrl:'https://github.com/shivam-xyz/wear365_Frontend',
            outputLevel: 'Satisfied'
        }
    ];
  return (
    <>
        <Grid container sx={{ mt: 5, }} spacing={2}>
                <Grid item xs={12} sx={{ mb: 2 }}>
                    <Typography variant='h4' textAlign={"center"} sx={{}}>Projects</Typography>
                </Grid>
                {
                    arrProjects.map((project) => {
                        return (
                            <>
                                <Grid item xs={12} sm={6}>
                                    <Card sx={[{ p: 1, mb: 2 }, (theme) => ({ '&:hover': { background: 'linear-gradient(180deg, rgba(67,58,238,1) 0%, rgba(148,148,242,1) 42%, rgba(220,229,247,1) 100%)' } })]} onClick={()=>{window.open(project.gitUrl,'_blank')}}>
                                        <span style={{ display: 'flex', alignItems: 'center' }}>
                                            <AssignmentIcon />
                                            <Typography variant='h6' fontWeight={700}>
                                                {project.title}
                                            </Typography>
                                        </span>
                                        <span style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '15px' }}>
                                            <SubdirectoryArrowRightIcon />
                                            <Typography>
                                                {project.description}
                                            </Typography>
                                        </span>
                                        <span style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <Typography variant='subtitle2'>
                                                {project.workMode}
                                            </Typography>
                                            <Typography>
                                                {project.outputLevel}
                                            </Typography>
                                        </span>
                                    </Card>
                                </Grid>
                            </>
                        )
                    })
                }
            </Grid>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Button variant='contained'>
                    MORE PROJECTS
                </Button>
            </Box>
    </>
  )
}

export default Projects