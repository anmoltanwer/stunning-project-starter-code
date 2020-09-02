import React from "react";
import classes from './Table.module.css';
import PinkIcon from "../assets/user-pink.png";
import GreyIcon from "../assets/tick-gray.png";
import BlueIcon from "../assets/user-blue.png";
import YellowIcon from "../assets/user-orange.png";
import TickBlue from "../assets/tick-blue.png"
import OrangeIcon from "../assets/user-red.png";


const Table = () => {
    return (
        
       <div className ={classes.table}> 
       <div className = {classes.TableRow}>
            <img src ={GreyIcon} alt ="Grey tick "/>
            <h3>Damm Design </h3>
            <img src ={PinkIcon} alt ="Pink avatar"/>
            <h4>20 DEC</h4>
            <button className={classes.Pink}>.</button>
       </div>
       <div className = {classes.TableRowActive}>
            <img src ={TickBlue} alt ="Grey tick "/>
            <h3>Damm Design </h3>
            <img src ={YellowIcon} alt ="Pink avatar"/>
            <h4>20 DEC</h4>
            <button className={classes.Red}>.</button>
       </div>
       <div className = {classes.TableRow}>
            <img src ={GreyIcon} alt ="Grey tick "/>
            <h3>Illustation </h3>
            <img src ={BlueIcon} alt ="Pink avatar"/>
            <h4>20 DEC</h4>
            <button className={classes.Green}>.</button>
       </div>
       <div className = {classes.TableRow}>
            <img src ={GreyIcon} alt ="Grey tick "/>
            <h3>Refunds</h3>
            <img src ={OrangeIcon} alt ="Pink avatar"/>
            <h4>20 DEC</h4>
            <button className={classes.Yellow}>.</button>
       </div>

       </div>
    )
}


export default Table;