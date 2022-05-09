import React from "react";
import { useState } from "react";
import "./WorkExperience.scss";
import './anim.scss';
import LineAnimation from "./anim";
const  ConEducation =()=>{

  const [togg,setTogg]=useState(false);
  const handleClick =()=>{
    setTogg(!togg);
  }
 
  return(


          <div className="experience-container" id="workExperience">
            <div>
            <a onClick={handleClick}><LineAnimation name={" Continuing Education as Coordinator"} /></a>
              <div className="experience-cards-div"  style ={{display:togg?'grid':'none'}}>

                       		
             
<p>			
Course Title:	International School on LiDAR Technology<br></br>
Duration:	31 March - 4 April 2008<br></br>
Sponcered By:	DST, ISPRS, Leica, Optech, Terrasolid, Geokosmos, Bill<br></br>
Venue:	IIT Kanpur
<LineAnimation name={''}/>
</p>
<p>		Course Title:	Short Term Course on Introduction to Airborne Altimetric LiDAR<br></br>
Duration:	17 - 20 October 2005<br></br>
Sponcered By:	Department of Science and Technology<br></br>
Venue:	I I T Kanpur<br></br>
<LineAnimation  name={''}/>
</p>
<p>	Course Title:	Short Term Course on Introduction to Airborne Altimetric LiDAR<br></br>
Duration:	10-14 March 2003<br></br>
Sponcered By:	Department of Science and Technology<br></br>
Venue:	I I T Kanpur<br></br>
<LineAnimation name={''}/>
</p>
<p>		Course Title:	Geoinformatics Workshop<br></br>
Duration:	March 2001<br></br>
Sponcered By:	ERDAS, Leica, ESRI<br></br>
Venue:	IT-BHU, Varanasi
<LineAnimation name={''}/>
</p>



                    

             
              </div>
              
            </div>
          </div>
        
    );
}
export default ConEducation;


