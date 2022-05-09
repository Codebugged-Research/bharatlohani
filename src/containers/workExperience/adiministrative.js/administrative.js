import React from "react";
import { useState } from "react";
import "../WorkExperience.scss";
import {Fade} from "react-reveal"
import LineAnimation from "../anim";
const  Administrative =()=>{

  const [togg,setTogg]=useState(false);
  const handleClick =()=>{
    setTogg(!togg);
  }
 
  return(

<Fade bottom duration={1000} distance="20px">
          <div className="experience-container" id="workExperience">
            <div>
            <a onClick={handleClick}><LineAnimation name={"Administrative Experience"} /></a>
              <div className="experience-cards-div3" style ={{display:togg?'grid':'none'}}>
                 
          
          <h2 style={{width:540}}>Position <LineAnimation name={''}/></h2> <h2 style={{width:540}}>Institute/Org <LineAnimation name={''}/></h2> <h2 style={{width:540}}>Year <LineAnimation name={''}/></h2><h2 style={{width:540}}>Continuing <LineAnimation name={''}/></h2>

<p >Chairman, SPC<LineAnimation  name={''}/></p>	
<p >Student Placement Committee, IIT Kanpur<LineAnimation name={''}/></p>	
<p>Dec. 2007 to this date<LineAnimation name={''}/></p>	
<p>Yes
<LineAnimation name={''}/>
    </p>	
<p>Chairman<LineAnimation name={''}/></p>		
<p>Community Centre Marriage Lawn Management Committee, IITK<LineAnimation name={''}/></p>		
<p>2006-2007<LineAnimation name={''}/></p>		
<p>No<LineAnimation name={''}/></p>		

	<p>Convener, DUGC, Civil Engineering<LineAnimation name={''}/></p>
	<p>I I T Kanpur<LineAnimation name={''}/></p>
	<p>3rd September 2004 to 2nd September 2006<LineAnimation name={''}/></p>
	<p>No<LineAnimation name={''}/></p>

<p>Member, DPGC, Civil Engineering<LineAnimation name={''}/></p>
<p>I I T Kanpur<LineAnimation name={''}/></p>	
<p>2003<LineAnimation name={''}/></p>	
<p>	No<LineAnimation name={''}/></p>

<p>Faculty Advisor<LineAnimation name={''}/></p>	
<p>Society of Civil Engineers (SOCE), IIT Kanpur<LineAnimation name={''}/></p>
<p>2003-2004<LineAnimation name={''}/></p>
<p>No<LineAnimation name={''}/></p>	

<p>	Coordinator<LineAnimation name={''}/></p>
<p>PG Orientation-2003<LineAnimation name={''}/></p>	
<p>-<LineAnimation name={''}/></p>
<p>No<LineAnimation name={''}/></p>	

<p>Coordinator<LineAnimation name={''}/></p>
<p>Summer camp I I T Kanpur<LineAnimation name={''}/></p>	
<p>In year 2003<LineAnimation name={''}/></p>	
<p>No<LineAnimation name={''}/></p>	

<p>Professor-in-charge<LineAnimation name={''}/></p>
<p>Surveying laboratory, Department of Civil Engineering, I.T.,<LineAnimation name={''}/></p>
<p>7 years<LineAnimation name={''}/></p>
<p>No<LineAnimation name={''}/></p>	

<p>2nd Lieutenant<LineAnimation name={''}/></p>	
<p>	2 UP EME NCC Corps. I.T., B.H.U.<LineAnimation name={''}/></p>
<p>3 years<LineAnimation name={''}/></p>
<p>No<LineAnimation name={''}/></p>

<p>	Tabulator of Examinations<LineAnimation name={''}/></p>
<p>Department of Civil Engineering, I T, BHU<LineAnimation name={''}/></p>	
<p>3 years<LineAnimation name={''}/></p>	
<p>	No<LineAnimation name={''}/></p>

<p>Administrative Warden<LineAnimation name={''}/></p>
<p>Vishwakarma Hostel, IT- BHU<LineAnimation name={''}/></p>	
<p>March 2001 - Nov. 2002<LineAnimation name={''}/></p>	
<p>	No<LineAnimation name={''}/></p>

<p>Warden<LineAnimation name={''}/></p>
<p>	Vishwakarma Hostel, IT - BHU<LineAnimation name={''}/></p>
<p>May 2000 - March 2001<LineAnimation name={''}/></p>	
<p>	No<LineAnimation name={''}/></p>

              </div>
              
            </div>
          </div>
        </Fade>
    );
}
export default Administrative;


