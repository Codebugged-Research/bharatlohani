
import React from 'react'

import {Fade} from "react-reveal"
import './anim.scss';
function LineAnimation(props){
    
return(<Fade top duration={2000} >
        
        <h1 className="experience-heading">{props.name}</h1>
        <div className="education-card-border"></div>
        
     </Fade>);
}




export default LineAnimation;

