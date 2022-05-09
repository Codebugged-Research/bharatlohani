import React from "react";
import { useState } from "react";
import "./WorkExperience.scss";
import './anim.scss';
import LineAnimation from "./anim";
const  InvitedLecture =()=>{

  const [togg,setTogg]=useState(false);
  const handleClick =()=>{
    setTogg(!togg);
  }
 
  return(


          <div className="experience-container" id="workExperience">
            <div>
            <a onClick={handleClick}><LineAnimation name={"Academic Experience"} /></a>
              <div className="experience-cards-div"  style ={{display:togg?'grid':'none'}}>

                       		
<p>Date of Lecture:	7 February 2008<br></br>
Organization:Map India 08: Geokosmos LiDAR Workshop<br></br>
Topic:	Laser Scanning: Status, Experiences and Challanges in India
<LineAnimation name={''}/>
</p>
<p>Date of Lecture:	19 January 2007<br></br>
Organization:	GPG Girls College Kanpur<br></br>
Topic:	Remote Sensing and its Applications
<LineAnimation name={''}/>
</p>
<p>Date of Lecture:	24 January 2007<br></br>
Organization:	MapWorld Forum 2007<br></br>
Topic:	Research Avenues Unfolded by LiDAR Technology
<LineAnimation name={''}/>
</p>

<p>Date of Lecture:	1 October 2005<br></br>
Organization:	IIRS, Dehradun<br></br>
Topic:	Airborne Altimetric LiDAR: Introduction
<LineAnimation name={''}/>
</p>
<p>Date of Lecture:	20 August 2005<br></br>
Organization:	Indian Institute of Remote Sensing, Dehradun<br></br>
Topic:	Theoretical concepts and applications of altimetric LiDAR
<LineAnimation name={''}/>
</p>
<p>Date of Lecture:	29 June 2004<br></br>
Organization:	MANIT, Bhopal<br></br>
Topic:	Laser altimetry in recent trends in Earth Resource Mapping
<LineAnimation name={''}/>
</p>
<p>Date of Lecture:	30 September - 1 October 2003<br></br>
Organization:	Indian Institute of Remote Sensing, Dehradun<br></br>
Topic:	LiDAR data processing and errors
<LineAnimation name={''}/>
</p>
<p>Date of Lecture:	25 October 2001<br></br>
Organization:	Indian Institute of Remote Sensing, Dehradun<br></br>
Topic:	Laser mapping for resource management: data, processing and error
<LineAnimation name={''}/>
</p>
                    

             
              </div>
              
            </div>
          </div>
        
    );
}
export default InvitedLecture;


