import React, {useContext,useState} from "react";
import "./WorkExperience.scss";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import {workExperiences2} from "../../portfolio";
import {Fade} from "react-reveal"
import StyleContext from "../../contexts/StyleContext";
import LineAnimation from "./anim";
export default function AcademicPg (){
  const [togg,setTogg]=useState(false);
  const handleClick =()=>{
    setTogg(!togg);
  }
    const {isDark} = useContext(StyleContext);
    return(

 <Fade bottom duration={1000} distance="20px">
          <div className="experience-container" id="workExperience">
            <div>
            <a onClick={handleClick}><LineAnimation name={"Course Taught PG"}/></a>
             
              <div className="experience-cards-div" style ={{display:togg?'grid':'none'}}>
                {workExperiences2.TaughtexperiencePg.map((card, i) => {
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
