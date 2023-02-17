import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import GitHubIcon from '@mui/icons-material/GitHub';
import GTranslateRoundedIcon from '@mui/icons-material/GTranslateRounded';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Avatar, Box, Button, Grid, Typography } from '@mui/material';
import React from 'react';
import my_image from '../assets/images/me1.jpg';

const Self_Intro = ({scrollHandler}) => {
  return (
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
                            <Button variant='contained' onClick={scrollHandler}>
                                CONTACT ME
                            </Button>
                            <Button variant='contained' onClick={()=>{window.open('https://drive.google.com/file/d/1nOE1CGDhlptz3iec7ZeVcLQE-Q7ycStl/view?usp=share_link','_parent')}}>
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
  )
}

export default Self_Intro