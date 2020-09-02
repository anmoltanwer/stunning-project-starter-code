import React from "react";
import classes from "./MainHead.module.css";
import Table from "../Table/Table";
import ArrowUp from "../assets/arrow-up.png";
import ArrowDown from "../assets/arrow-down.png";
import HideImg from "../HideImg/HideImg"

const MainHead = () => {
    return (
        <div className = {classes.RightDiv}>
             <p className ={classes.MainHead}>Stunning  Workplace.</p>
             <p className = {classes.DescPara}>With Stunning, remote teams can organise projects, manging shifting priorities and get work done.
                 </p>
               <div className ={classes.FlexDiv}>  
                    <button className ={classes.UserBtn}>New Account</button>
                    <img src = {ArrowUp} alt ="arrow up" />
                    <img src = {ArrowDown} alt ="arrow down" />
             </div>
            <HideImg/>
             <Table/>
       </div> 
    )
}
export default MainHead;