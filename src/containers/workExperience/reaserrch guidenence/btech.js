import React, {useContext} from "react";
import { useState } from "react";
import "../WorkExperience.scss";
import ExperienceCard from "F:/gokul/neww/src/components/experienceCard/ExperienceCard.js";
import {workExperiences2} from "../../../portfolio.js";
import {Fade} from "react-reveal"
import StyleContext from "F:/gokul/neww/src/contexts/StyleContext.js";
import LineAnimation,{togg} from "../anim";
const  BtRe =()=>{
  const {isDark} = useContext(StyleContext);
  const [togg,setTogg]=useState(false);
  const handleClick =()=>{
    setTogg(!togg);
  }
 
  return(

<Fade bottom duration={1000} distance="20px">
          <div className="experience-container" id="workExperience">
            <div>
            <a onClick={handleClick}><LineAnimation name={"b.tech guidenence"} /></a>
              <div className="experience-cards-div" style ={{display:togg?'grid':'none'}}>
                {workExperiences2.bre.map((card, i) => {
                  return (
                    
                    <ExperienceCard
                    key={i}
                    isDark={isDark}
                    cardInfo={{
                      company: card.company,
                      desc: card.desc,
                      date: card.date,
                      companylogo: card.companylogo,
                      role: card.role,
                      
                      descBullets: card.descBullets
                    }}
                    />
                    
                    );
                  })}
             
              </div>
              
            </div>
          </div>
        </Fade>
    );
}
export default BtRe;
