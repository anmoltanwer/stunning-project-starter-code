import React from 'react';
 import classes from './LandingSection.module.css';
 import MainHead from '../MainHead/MainHead';
import LeftBar from '../LeftBar/LeftBar'


 const LandingSection = () => {
     return (
     
         <div className ={classes.LandingSection}>
         <MainHead />
        <LeftBar />
         
        </div>
     )
 }
export default LandingSection;