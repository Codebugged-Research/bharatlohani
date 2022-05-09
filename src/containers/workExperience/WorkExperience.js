import React, {useContext} from "react";
import "./WorkExperience.scss";
import {workExperiences,workExperiences2} from "../../portfolio";
import InvitedLecture from "./initedLectures";

import AcademicExperiece from "./AcademicExperiece";
import AcademicUG from './CourseTaught';
import AcademicPg from "./coursetaughtPg";
import Reserach from "./reaserrch guidenence/re";
import CONference from "./conference.js";
import Administrative from "./adiministrative.js/administrative";
import ConEducation from "./conEducation";
import ConEducationAsRePerson from "./conEduAsResoursePerson";
export default function WorkExperience() {
 
  if (workExperiences.display) {
    return (
      <div id="experience">
       <h1 className="education-heading" style={{margin:100}}>Work Experiences</h1>
      <AcademicExperiece/>
      <AcademicUG/>
      <AcademicPg/>
      <Reserach/>
      <InvitedLecture/>
      <CONference/>
      <ConEducation/>
      <ConEducationAsRePerson/>
      <Administrative/>
      </div>
    );
  }
  return null;
}
