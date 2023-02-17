import { Container } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import Certification from './Certification';
import Footer from './Footer';
import Projects from './Projects';
import Reach_Me_Out from './Reach_Me_Out';
import Self_Intro from './Self_Intro';
import What_i_do from './What_i_do';

const useStyles = makeStyles((theme) => ({
    container: {
        marginTop: theme.spacing(10)
    }
}));

const Personal_Info_Section = () => {
    const classes = useStyles();
    const scrollHandler=()=>{
        const element = document.getElementById('reach_me');
        if(element){
            element.scrollIntoView({behavior:'smooth'})
        }
    }
    return (
        <Container className={classes.abc} sx={[(theme) => ({ marginTop: theme.spacing(10) })]} >
            {/* Self Introduction */}
            <Self_Intro scrollHandler={scrollHandler} />
            {/* What i do? */}
            <What_i_do />
            {/* Projects */}
            <Projects />
            {/* Certification */}
            <Certification />
            {/* React Out to me! */}
            <span id='reach_me'>
                <Reach_Me_Out />
            </span>
            {/* Footer */}
            <Footer />
        </Container>
    )
}

export default Personal_Info_Section