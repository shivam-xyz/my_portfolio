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

const useStyles = makeStyles((theme) => ({
    container: {
        marginTop: theme.spacing(10)
    }
}));

const Personal_Info_Section = () => {
    const classes = useStyles();
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
    const arrProjects = [
        {
            sn: 1,
            title: 'Tomestry Clone',
            description: 'React Frontend, Node Backend, MongoDB, and RestApi',
            workMode: 'Made Alone',
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
            sn: 1,
            title: 'Yummy Food E-commerce',
            description: 'React Frontend, Node Backend, MongoDB, and RestApi',
            workMode: 'Made Alone',
            outputLevel: 'Satisfied'
        },
    ];
    return (
        <Container className={classes.abc} sx={[(theme) => ({ marginTop: theme.spacing(10) }), { '&:hover': {} }]} >
            {/* Self Introduction */}
            <Grid container>
                <Grid item xs={12} sm={6}>
                    <Box sx={{}}>
                        <Typography variant='h4' fontWeight={700} textAlign="center" sx={{ mb: 2 }}>
                            Hi, I'm Shivam Singh
                        </Typography>
                        <Typography color={"#3B3B3B"} fontWeight={900} textAlign="center" sx={[{ mb: 1 }, { '&:hover': { color: 'green' } }]}>
                            <span style={{ border: '1px solid black', padding: '5px' }}>
                                Full Stack Developer
                            </span>
                        </Typography>
                        <Typography color={"#3B3B3B"} fontWeight={700} textAlign="center" sx={{ mt: 1 }}>
                            React.js | Node.js | Flutter | Next.js | Django | MongoDB | HTML | CSS | JavaScript
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
                        <Box sx={{ display: 'flex', justifyContent: 'space-evenly', mt: 2, mb: 3 }}>
                            <Button variant='contained'>
                                CONTACT ME
                            </Button>
                            <Button variant='contained'>
                                SEE MY RESUME
                            </Button>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Avatar src={my_image} sx={[{ height: '250px', width: '250px' }, { "&:hover": { height: '290px', width: '290px' } }]} />
                    </Box>
                </Grid>
            </Grid>
            {/* What i do? */}
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
            {/* Projects */}
            <Grid container sx={{ mt: 5, }} spacing={2}>
                <Grid item xs={12} sx={{ mb: 2 }}>
                    <Typography variant='h4' textAlign={"center"} sx={{}}>Projects</Typography>
                </Grid>
                {
                    arrProjects.map((project) => {
                        return (
                            <>
                                <Grid item xs={12} sm={6}>
                                    <Card sx={[{ p: 1, mb: 2 }, (theme) => ({ '&:hover': { background: 'linear-gradient(180deg, rgba(67,58,238,1) 0%, rgba(148,148,242,1) 42%, rgba(220,229,247,1) 100%)' } })]} >
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
            {/* Certification */}
            <Grid container sx={{ mt: 5, }} spacing={2}>
                <Grid item xs={12}>
                    <Typography variant='h4' textAlign="center">
                        Certifications
                    </Typography>
                </Grid>
                {/* Certification Card */}
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
            {/* React Out to me! */}
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
            <Grid container sx={{ mt: 6 }}>
                <Grid item xs={12} sx={{ display: 'flex' , justifyContent:'center' }} textAlign='center'>Made with {<FavoriteIcon sx={{ color: 'red' }} />} By Shivam Singh</Grid>
            </Grid>
        </Container>
    )
}

export default Personal_Info_Section