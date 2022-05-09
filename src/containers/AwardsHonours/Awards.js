import React from "react";
import { useState } from "react";
import "../workExperience/WorkExperience.scss";
import '../workExperience/anim.scss';
import LineAnimation from "../workExperience/anim";
const  Awards =()=>{

  const [togg,setTogg]=useState(false);
  const handleClick =()=>{
    setTogg(!togg);
  }
 
  return(


          <div className="experience-container" id="workExperience">
            <div>
            <a onClick={handleClick}><LineAnimation name={"Awards"} /></a>
              <div className="experience-cards-div"  style ={{display:togg?'grid':'none'}}>

                       		
             
<p>	    Name of the Award:	Silver Award in CATCON-5 for developing LiDAR<br></br>
Issuing Authority:	International Society for Photogrammetry and Remote Sensing<br></br>
Year:	11 July 2008
<LineAnimation name={''}/>
</p>
<p>    Name of the Award:	ISRS Award for best paper titled "GCP Collection for Corona<br></br>
Issuing Authority:	Indian Society for Remote Sensing<br></br>
Year:	20 Dec. 2007 (During ISRS Convention)
<LineAnimation name={''}/>
</p>
<p>	    Name of the Award:	Poster rated among 10 best papers<br></br>
Issuing Authority:	AGIT/GI Forum 2007 conference Salzburg<br></br>
Year:	5 July 2007
<LineAnimation name={''}/>
</p>
<p>	    Name of the Award:	Best Poster Award<br></br>
Issuing Authority:	ISPRS conference on Optical 3D measurement techniques<br></br>
Year:	12 July 2007
<LineAnimation name={''}/>
</p>
<p>	    Name of the Award:	Best Poster Presentation "Development of a 3D visualization<br></br>
Issuing Authority:	MapWorld 2007, Hyderabad<br></br>
Year:	25 January 2007
<LineAnimation name={''}/>
</p>
<p>	    Name of the Award:	Fellow<br></br>
Issuing Authority:	Institute of Surveyors, India<br></br>
Year:	2005
<LineAnimation name={''}/>
</p>
<p>	Name of the Award:	Commonwealth Scholarship<br></br>
Issuing Authority:	Commonwealth Association of Universities UK<br></br>
Year:	1996-1999
<LineAnimation name={''}/>
</p>
<p>	Name of the Award:	National Scholarship<br></br>
Issuing Authority:	Government of Uttar Pradesh<br></br>
Year:	1979-1983
<LineAnimation name={''}/>
</p>



                    

             
              </div>
              
            </div>
          </div>
        
    );
}
export default Awards;


