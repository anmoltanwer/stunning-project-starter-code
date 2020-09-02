import React from "react";
import classes  from "./LeftBar.module.css";
 import MainImg from '../assets/landing-section-image.png';

const LeftBar = (props) => {
    return(
        <img src ={MainImg} alt ="Side Thumbnail"  className ={classes.SideImg}/>
    )
}
export default LeftBar;