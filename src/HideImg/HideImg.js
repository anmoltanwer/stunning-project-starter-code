import React from "react";
import classes  from "./HideImg.module.css";
 import MainImg from '../assets/landing-section-image.png';

const HideImg = () => {
    return(
        <img src ={MainImg} alt ="Side"  className ={classes.HideImg}/>
    )
}
export default HideImg;