import { Box, Button, Card, Grid, Typography } from '@mui/material';
import React from 'react';
// import GitHubIcon from '@mui/icons-material/GitHub';
import AssignmentIcon from '@mui/icons-material/Assignment';
import SubdirectoryArrowRightIcon from '@mui/icons-material/SubdirectoryArrowRight';

const Projects = () => {
    const arrProjects = [
        {
            sn: 1,
            title: 'Wear365 Backend',
            description: 'Node Backend, MongoDB, and RestApi',
            workMode: 'Made Alone',
            gitUrl:'https://github.com/shivam-xyz/wear365_Backend',
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
                <Button variant='contained' onClick={()=>{window.open('https://github.com/shivam-xyz?tab=repositories','_blank')}}>
                    MORE PROJECTS
                </Button>
            </Box>
    </>
  )
}

export default Projects