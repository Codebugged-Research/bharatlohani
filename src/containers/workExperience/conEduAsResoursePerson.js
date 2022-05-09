import React from "react";
import { useState } from "react";
import "./WorkExperience.scss";
import './anim.scss';
import LineAnimation from "./anim";
const  ConEducationAsRePerson =()=>{

  const [togg,setTogg]=useState(false);
  const handleClick =()=>{
    setTogg(!togg);
  }
 
  return(


          <div className="experience-container" id="workExperience">
            <div>
            <a onClick={handleClick}><LineAnimation name={"Continuing Education as Resource Person"} /></a>
              <div className="experience-cards-div"  style ={{display:togg?'grid':'none'}}>

                       		
             
<p>			

Course Title:	Geographical Information System for Archaeologists <br></br>
Duration:	6-16 January 2008<br></br>
Sponcered By:	ASI, India<br></br>
Venue:	IIT Kanpur
<LineAnimation name={''}/>
</p>
<p>		Course Title:	Basic Surveying for field operations for NCCL Engineers<br></br>
Duration:	3 days<br></br>
Sponcered By:	NCCL<br></br>
Venue:	IIT Kanpur
<LineAnimation  name={''}/>
</p>
<p>		Course Title:	PWD Assam engineers course on Surveying<br></br>
Duration:	June 2007<br></br>
Sponcered By:	PWD Assam<br></br>
Venue:	IIT Kanpur
<LineAnimation name={''}/>
</p>
<p>		Course Title:	Summer School on "Future of the past": Use of modern technologies<br></br>
Duration:	12 June to 7 July 2006<br></br>
Sponcered By:	IIIT-Jabalpur<br></br>
Venue:	IIT Kanpur
<LineAnimation name={''}/>
</p>
<p>			Course Title:	Short course for PWD Engineers of Assam<br></br>
Duration:	January 2005<br></br>
Sponcered By:	PWD Assam<br></br>
Venue:	I I T Kanpur
<LineAnimation name={''}/>
</p>



                    

             
              </div>
              
            </div>
          </div>
        
    );
}
export default ConEducationAsRePerson;


