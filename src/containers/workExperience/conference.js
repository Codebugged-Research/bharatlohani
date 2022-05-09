import React from "react";
import { useState } from "react";
import "./WorkExperience.scss";
import './anim.scss';
import LineAnimation from "./anim";
const  CONference =()=>{

  const [togg,setTogg]=useState(false);
  const handleClick =()=>{
    setTogg(!togg);
  }
 
  return(


          <div className="experience-container" id="workExperience">
            <div>
            <a onClick={handleClick}><LineAnimation name={" Conference / Technical Meeting Attended"} /></a>
              <div className="experience-cards-div"  style ={{display:togg?'grid':'none'}}>

                       		
             
<p>	ISPRS Laser scanning and Silvi Laser 2007
Helsinki University of Technology and Finnish Geodetic Institute
12 - 14 September 2007
As:	Presented Paper
<LineAnimation name={''}/>
</p>
<p>	ISPRS Joint Workshop on Visualisation and exploration of Geospatial data
University of Applied Sciences Stuttgart
26 - 29 June 2007
As:	Presented Paper
<LineAnimation name={''}/>
</p>
<p>	AGIT/GI Forum 2007
Zentrum for Geoinformatics, Salzburg
3 - 6 July 2007
As:	Presented Paper
<LineAnimation name={''}/>
</p>
<p>	International conference on Optical 3D measurement techniques
ETH Zurich and TU Vienna
9 - 13 July 2007
As:	Presented Paper
<LineAnimation name={''}/>
</p>
<p>	ISPRS Commission VI Symposium
ISPRS-JSRS, Tokyo University, Japan
27-30 June 2006
As:	Presented Paper
<LineAnimation name={''}/>
</p>
<p>	MapWorld Forum 2007, Hyderabad
GIS Development
24-28 January 2007
As:	Panelist in LiDAR Panel Discussion
<LineAnimation name={''}/>
</p>
<p>	International Symposium on Geospatial Databases for Sustainable Development
ISPRS
27-30 September 2006
As:	Presented Paper
<LineAnimation name={''}/>
</p>
<p>	CATCON-ISPRS Commission VI Software Competition
ISPRS-JSRS, Tokyo University, Japan
27-30 June 2006
As:	Presented softwareSkills
<LineAnimation name={''}/>
</p>
<p>	Brain storming session on "National programme on altimetric LiDAR"
IIT Kanpur and DST New Delhi
14 June 2006
As:	Organiser
<LineAnimation name={''}/>
</p>
<p>	Brain storming session on "Future of Past": Modern technologies for archaeology
IIT Kanpur
19 March 2005
As:	Presented Paper
<LineAnimation name={''}/>
</p>
<p>	Map India-2004
Map India, New Delhi
28-30 January 2004
As:	Presented Paper
<LineAnimation name={''}/>
</p>
<p>	Curriculum development in geoinformatics
I I T Kanpur, India
15 July 2003
As:	Presented Paper
<LineAnimation name={''}/>
</p>
<p>Visited ESSC, The University of Reading, UK to work on a research project CORILA
The University of Reading, UK
7 June 2002 to 7 July 2002
As:	Presented Paper
<LineAnimation name={''}/>
</p>
<p>Map India-2002, Co-chaired technical session
Map India-2002
6-8 February 2002
As:	Presented Paper
<LineAnimation name={''}/>
</p>
<p>Technical Meeting on "Introduction of LiDAR in India"
Vandana Aviation and Aviotronics Pvt Ltd, New Delhi
11 June 2001
As:	Presented Paper
<LineAnimation name={''}/>
</p>
<p>	MapIndia-2001
New Delhi
7-9 February 2001
As:	Presented Paper
<LineAnimation name={''}/>
</p>
<p>	First technical meeting to evaluate the LIDAR technology in India
National Remote Sensing Agency, Hydrabad
2 December 2000
As:	Presented Paper
<LineAnimation name={''}/>
</p>
<p>	Indian Society for Remote Sensing annual symposium
I I T Kanpur, India
21-22 November 2000
As:	Presented Paper
<LineAnimation name={''}/>
</p>
<p>	Fourth international aiborne remote sensing conference and exhibition
Ottawa, Canada
21-24 June, 1999
As:	Presented Paper
<LineAnimation name={''}/>
</p>
<p>Application of SAR inteferometry, The Remote Sensing Society Workshop,ESSC
The University of Reading, UK
10 May 1999
As:	Presented Paper
<LineAnimation name={''}/>
</p>
<p>	34 the meeting of surveying teachers
Nattingham, UK
14-16 December 1998
As:	Presented Paper
<LineAnimation name={''}/>
</p>
<p>
  	Final annual meeting of land ocean interaction study
Norwich, UK
24-26 March 1998
As:	Presented Paper
<LineAnimation name={''}/>
</p>
<p>	Technical meeting with researchers from University of Padua
Venice, Italy
May 1998
As:	Presented Paper
<LineAnimation name={''}/>
</p>
<p>ECSA28 Int. Symp. On remote sensing of coasts and estuaries
St. Andrews, Scotland
1-5 September
As:	Presented Paper
<LineAnimation name={''}/>
</p>
<p>	International airborne remote sensing conference and exhibition
Copenhagen, Denmark
7-10 July 1997
As:	Presented Paper
<LineAnimation name={''}/>
</p>
<p>	Engineering education in 21 st century
Institute of Technoly BHU Varanasi, India
14-15 Jan 1995
As:	Presented Paper
<LineAnimation name={''}/>
</p>
<p>	National symposium of Indian Society of Remote Sensing
Guwahati, India
25-28 Novemver 1993
As:	Presented Paper
<LineAnimation name={''}/>
</p>


                    

             
              </div>
              
            </div>
          </div>
        
    );
}
export default CONference;


