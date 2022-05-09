import React from "react";
import { useState } from "react";
import '../workExperience/anim.scss';
import LineAnimation from "../workExperience/anim";

const  Honours =()=>{

  const [togg,setTogg]=useState(false);
  const handleClick =()=>{
    setTogg(!togg);
  }
 
  return(


          <div className="experience-container" id="workExperience">
            <div>
            <a onClick={handleClick}><LineAnimation name={"Honours"} /></a>
              <div className="experience-cards-div"  style ={{display:togg?'grid':'none'}}>

                       		
             
<p>	   	Name of the organization:	International Journal of Remote Sensing<br></br>
Year:		--<br></br>
Position:		Referee<br></br>
Continuing :		Yes<br></br>
<LineAnimation name={''}/>
</p>
<p>   	Name of the organization:	Journal of The Indian Society of Remote Sensing<br></br>
Year:		--<br></br>
Position:		Referee<br></br>
Continuing :		Yes<br></br>
<LineAnimation name={''}/>
</p>
<p>	   	Name of the organization:	International Journal of Geoinformatics<br></br>
Year:		--<br></br>
Position:		Referee<br></br>
Continuing :		Yes<br></br>
<LineAnimation name={''}/>
</p>
<p>	   	Name of the organization:	Asian Journal of Geoinformatics<br></br>
Year:		--<br></br>
Position:		Referee<br></br>
Continuing :		Yes<br></br>
<LineAnimation name={''}/>
</p>
<p>	    	Name of the organization:	GIM International<br></br>
Year:		September 2006 -This date<br></br>
Position:		Editor<br></br>
Continuing :		Yes<br></br>
<LineAnimation name={''}/>
</p>
<p>	    	Name of the organization:	D S T, India<br></br>
Year:		2005 to this date<br></br>
Position:		Project Referee<br></br>
Continuing :		Yes
<LineAnimation name={''}/>
</p>

<p>	Name of the organization:	GIM International<br></br>
Year:		2002 -2006<br></br>
Position:		Regional Correspondent<br></br>
Continuing :		No
<LineAnimation name={''}/>
</p>



                    

             
              </div>
              
            </div>
          </div>
        
    );
}
export default Honours;


