import React from 'react'
import PhdRe from "./phd";
import "../WorkExperience.scss";
import MtRe from "./mtech";
import BtRe from "./btech";
import { useState } from "react";
import LineAnimation from "../anim";
export default function (){


    const [togg,setTogg]=useState(false);
    const handleClick =()=>{
      setTogg(!togg);
    }
 return(

    <div className='experience-container'>
    <a onClick={handleClick} id ={"re"}><LineAnimation name={"Reaserch Guidenence"} style={{display:'grid auto'}}/></a>
    
    <div className="experience-cards-div1" style ={{display:togg?'inline':'none',paddingLeft:10}}>
        <BtRe />
        <MtRe />
        <PhdRe />
        </div></div>
    
    );}