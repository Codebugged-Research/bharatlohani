import React from 'react'

import { useState } from "react";
import '../workExperience/anim.scss';
import LineAnimation from "../workExperience/anim";
import Honours from './Honours';
import Awards from './Awards';
export default function AwardsAndHonours(){


    const [togg,setTogg]=useState(false);
    const handleClick =()=>{
      setTogg(!togg);
    }
 return(

    <div className='experience-container' id='Awards'>
    <a onClick={handleClick} ><LineAnimation name={"Awards and Honours 🏆"} style={{display:'grid auto'}}/></a>
    
    <div className="experience-cards-div1" style ={{display:togg?'inline':'none',paddingLeft:10}}>
        <Honours/>
        <Awards/>
        </div></div>
    
    );}