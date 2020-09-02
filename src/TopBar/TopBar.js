
import React from "react";
import classes from '../TopBar/TopBar.module.css';
import LogoImg from "../assets/stunning-logo.png";

const TopBar = () => {
    return(
        <div className ={classes.TopBar}>
      <img src ={LogoImg} alt = " top-logo" className ={classes.LogoImg} />
      <nav>
        <p className = {classes.Active}>Home</p>
        <p>About</p>
        <p>Blog</p>
        <p>Jobs</p>
      </nav>
      <button className ={classes.AccBtn}>Your Account</button>
      <p className ={classes.MenuBar}><i class ="fa fa-bars"></i></p>
      </div>
    )
}

export default TopBar;