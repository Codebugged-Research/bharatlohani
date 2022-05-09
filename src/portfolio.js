/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: " Dr.Bharat Lohani",
  title: "Hi, I'm Dr.Bharat Lohani",
  subTitle: emoji(
    "Professor , Department of Civil Engineering, Indian Institute of Technology, Kanpur - 208016, India. Executive Director GEOKNO India Pvt. Ltd."),
  resumeLink:
    "http://home.iitk.ac.in/~blohani/resume.pdf", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "#",
  linkedin: "https://www.linkedin.com/in/bharatlohani",
  gmail: "blohani@iitk.ac.in",
  gitlab: "#",
  facebook: "#",
  medium: "#",
  stackoverflow: "#",
  instagram:'#',
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "ESSC, The University of Reading, UK",
      logo: require("./assets/images/ess.png"),
      subHeader: "Doctrate in Remote Sensing & Environmental Science",
      duration: "Year:	1999",
      desc: "Thesis:",
      descBullets: [
        "Application of airborne remote sensing to the study of intertidal geomorphology."
        
      ]
    },
    {
      schoolName: "IIT Roorkee, Roorkee",
      logo: require("./assets/images/rookie.png"),
      subHeader: "Master of Engineering in 	Remote Sensing & Photogrammetric ",
      duration: "Year:	1990",
      desc: "Thesis:",
      descBullets: ["	Development of an image enhancement package."]
    },

    {
      schoolName: "Madan Mohan Malviya Engineering College, Gorakhpur",
      logo: require("./assets/images/madhan.png"),
      subHeader: "Bachelor of Engineering in Civil",
      duration: "Year:	1988",
      desc: "Thesis:",
      descBullets: ["Town and building planning for Jawahar Nagar Colony, Gorakhpur"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
     
      role: "Associate Professor",
      company: "Civil Engineering, IIT Kanpur",
      companylogo: require("./assets/images/iitk.png"),
      date: "	December 2007 to this date",
      desc: "Indian Institute of Technology Kanpur (IIT Kanpur)  is a public technical university located in Kanpur, Uttar Pradesh, India. It was declared to be an Institute of National Importance by the Government of India under the Institutes of Technology Act.",
     /* descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]*/
    },
    {
    role: "	Assistant Professor",
    company: "	Civil Engineering, IIT Kanpur",
    companylogo: require("./assets/images/iitk.png"),
    date: "	December 2002 to December 2007",
    desc: "IIT Kanpur was ranked third among engineering colleges by India Today in 2021. It was ranked fourth among engineering colleges in India by the National Institutional Ranking Framework (NIRF) in 2020, and sixth overall."
  },
  
  {
    role: "Senior Lecturer",
    company: "Institute of Technology,Banaras",
    companylogo: require("./assets/images/iitbhu.png"),
    date: "	December 1999 to December 2002",
    desc: "Indian Institute of Technology (BHU) Varanasi (IIT BHU) is a public technical university located in Varanasi, Uttar Pradesh, India. Founded in 1919 as the Banaras Engineering College, it became the Institute of Technology, Banaras Hindu University in 1968."
  },
  {
      role: "	Research Officer",
      company: "ESSC, The University of Reading",
      companylogo: require("./assets/images/ess.png"),
      date: "	December 2002 to December 2007",
      desc: "IIT Kanpur was ranked third among engineering colleges by India Today in 2021. It was ranked fourth among engineering colleges in India by the National Institutional Ranking Framework (NIRF) in 2020, and sixth overall."
  },
  {
      role: "Postgraduate Student",
      company: "ESSC, The University of Reading",
      companylogo: require("./assets/images/ess.png"),
      date: "	December 2002 to December 2007",
      desc: "IIT Kanpur was ranked third among engineering colleges by India Today in 2021. It was ranked fourth among engineering colleges in India by the National Institutional Ranking Framework (NIRF) in 2020, and sixth overall."
  },
  {
      role: "	Lecturer",
      company: "Institute of Technology, Banaras Hindu University,",
      companylogo: require("./assets/images/iitbhu.png"),
      date: "1990 to 1995",
      desc: "Indian Institute of Technology (BHU) Varanasi (IIT BHU) is a public technical university located in Varanasi, Uttar Pradesh, India. Founded in 1919 as the Banaras Engineering College, it became the Institute of Technology, Banaras Hindu University in 1968."
  }
    
  ]
};
const workExperiences2 = {
  display: false, //Set it to true to show workExperiences Section
  experience: [
    {
     
      role: "ap",
      company: "Civil Engineering, IIT Kanpur",
      companylogo: require("./assets/images/iitk.png"),
      date: "	December 2007 to this date",
      desc: "Indian Institute of Technology Kanpur (IIT Kanpur)  is a public technical university located in Kanpur, Uttar Pradesh, India. It was declared to be an Institute of National Importance by the Government of India under the Institutes of Technology Act.",
     /* descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]*/
    },
    {
    role: "	 Professor",
    company: "	Civil Engineering, IIT Kanpur",
    companylogo: require("./assets/images/iitk.png"),
    date: "	December 2002 to December 2007",
    desc: "IIT Kanpur was ranked third among engineering colleges by India Today in 2021. It was ranked fourth among engineering colleges in India by the National Institutional Ranking Framework (NIRF) in 2020, and sixth overall."
  },
  
  {
    role: "S Lecturer",
    company: "Institute of Technology,Banaras",
    companylogo: require("./assets/images/iitbhu.png"),
    date: "	December 1999 to December 2002",
    desc: "Indian Institute of Technology (BHU) Varanasi (IIT BHU) is a public technical university located in Varanasi, Uttar Pradesh, India. Founded in 1919 as the Banaras Engineering College, it became the Institute of Technology, Banaras Hindu University in 1968."
  },
      {
      role: "	Research Officer",
      company: "ESSC, The University of Reading",
      companylogo: require("./assets/images/ess.png"),
      date: "	December 2002 to December 2007",
      desc: "IIT Kanpur was ranked third among engineering colleges by India Today in 2021. It was ranked fourth among engineering colleges in India by the National Institutional Ranking Framework (NIRF) in 2020, and sixth overall."
    }
    
  ],
  // experience ug
  TaughtexperienceUG: [
    {
     
      role: "Tutor",//taught as
      company: "Indian Institute of Technology, Kanpur.",
      companylogo: require("./assets/images/eg.png"),
      date: "Number of Times:	1",//Number of Times
      desc: " Engineering Drawing",//Course no. Name:
     /* descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]*/
    },
    {
     
      role: "Tutor",//taught as
      company: "Indian Institute of Technology, Kanpur.",
      companylogo: require("./assets/images/nm.webp"),
      date: "Number of Times:	1",//Number of Times
      desc: " Numerical Methods",//Course no. Name:
     /* descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]*/
    },
    {
     
      role: "	Instructor(Self Developed)",//taught as
      company: "Institute of Technology, BHU.",
      companylogo: require("./assets/images/rs.jpg"),
      date: "Number of Times:	2",//Number of Times
      desc: " Remote Sensing in Civil Engineering",//Course no. Name:
     /* descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]*/
    },
    {
     
      role: "	Instructor",//taught as
      company: "Indian Institute of Technology, Kanpur.",
      companylogo: require("./assets/images/sur.jpg"),
      date: "Number of Times:	1",//Number of Times
      desc: " Surveying Camp",//Course no. Name:
     /* descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]*/
    },
    {
     
      role: "	Instructor",//taught as
      company: "Indian Institute of Technology, Kanpur.",
      companylogo: require("./assets/images/gi.jpg"),
      date: "Number of Times:	2",//Number of Times
      desc: " Geoiniformatics",//Course no. Name:
     /* descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]*/
    },
    {
     
      role: "	Instructor(Self Developed)",//taught as
      company: "	Institute of Technology, BHU.",
      companylogo: require("./assets/images/su2.png"),
      date: "Number of Times:	6",//Number of Times
      desc: " Surveying Practice II",//Course no. Name:
     /* descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]*/
    },
    {
     
      role: "Instructor",//taught as
      company: "	Institute of Technology, BHU.",
      companylogo: require("./assets/images/te.svg"),
      date: "Number of Times:	1",//Number of Times
      desc: " Transportation Engineering I",//Course no. Name:
     /* descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]*/
    },
    {
     
      role: "Instructor(Self Developed)",//taught as
      company: "	Institute of Technology, BHU.",
      companylogo: require("./assets/images/su3.png"),
      date: "Number of Times:	6",//Number of Times
      desc: " Surveying II",//Course no. Name:
     /* descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]*/
    },
    {
     
      role: "Instructor(Self Developed)",//taught as
      company: "	Institute of Technology, BHU.",
      companylogo: require("./assets/images/ca.png"),
      date: "Number of Times:	2",//Number of Times
      desc: " Computer Applications in Civil Engineering",//Course no. Name:
     /* descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]*/
    },
    {
     
      role: "Instructor",//taught as
      company: "	Institute of Technology, BHU.",
      companylogo: require("./assets/images/mc.png"),
      date: "Number of Times:	2",//Number of Times
      desc: " Materials and Building Construction",//Course no. Name:
     /* descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]*/
    },
    {
     
      role: "Instructor",//taught as
      company: "	Institute of Technology, BHU.",
      companylogo: require("./assets/images/su4.png"),
      date: "Number of Times:	8",//Number of Times
      desc: " Surveying I",//Course no. Name:
     /* descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]*/
    },
    {
     
      role: "Instructor",//taught as
      company: "	Institute of Technology, BHU.",
      companylogo: require("./assets/images/bp.png"),
      date: "Number of Times:	3",//Number of Times
      desc: " Building Planning, Drawing, and Estimation",//Course no. Name:
     /* descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]*/
    },
    {
     
      role: "Instructor",//taught as
      company: "	Institute of Technology, BHU.",
      companylogo: require("./assets/images/sur.jpg"),
      date: "Number of Times:	8",//Number of Times
      desc: "Surveying Practice I",//Course no. Name:
     /* descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]*/
    }
    
    
    
  ],
  TaughtexperiencePg:[
    {
     
      role: "Instructor",//taught as
      company: "Indian Institute of Technology Kanpur.",
      companylogo: require("./assets/images/rs1.png"),
      date: "Number of Times:	1",//Number of Times
      desc: "Machine Processing of Remotely Sensed Data",//Course no. Name:
     /* descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]*/
    },
    {
     
      role: "Instructor(Self Developed)",//taught as
      company: "Indian Institute of Technology Kanpur.",
      companylogo: require("./assets/images/rs2.png"),
      date: "Number of Times:	2",//Number of Times
      desc: "Precision Remote Sensing",//Course no. Name:
     /* descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]*/
    },
    {
     
      role: "Instructor",//taught as
      company: "Indian Institute of Technology Kanpur.",
      companylogo: require("./assets/images/rs3.png"),
      date: "Number of Times:	4",//Number of Times
      desc: "Introduction to Remote Sensing and GIS",//Course no. Name:
     /* descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]*/
    },
    {
     
      role: "Instructor(Self Developed)",//taught as
      company: "Indian Institute of Technology Kanpur.",
      companylogo: require("./assets/images/rs4.png"),
      date: "Number of Times:	7",//Number of Times
      desc: "Remote Sensing Application in Water Resources",//Course no. Name:
     /* descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]*/
    }
    
    
  ],
  phdre:[
    {
     
      role: "Name : Susham Biswas",//name
      company: "Indian Institute of Technology Kanpur.",
      companylogo: require("./assets/images/ligi.png"),
      date: "In progress",//Number of Times
      desc: "	Noise propogation modelling with high resolution obstruction information using LiDAR under GIS environment",//title:
     /* descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]*/
    },
    {
     
      role: "Name : Suddhasheel Ghosh",//name
      company: "Indian Institute of Technology Kanpur.",
      companylogo: require("./assets/images/livi.png"),
      date: "In progress",//Number of Times
      desc: "Framework for an interactive and immersive visualization system for LiDAR Data",//title:
     /* descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]*/
    }
    
    
    
  ],
  mre:[
    {
     
      role: "Name :   Bharath Gandhi",//name
      company: "Indian Institute of Technology Kanpur.",
      companylogo: require("./assets/images/rs2.png"),
      date: "  August 2008",//Number of Times
      desc: "	  Development of Remote Sensing and GIS based approach for Archaeological Investigation in Varanasi and its surrounding,",//title:
     /* descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]*/
    },
    {
     
      role: "Name :   N Balaji",//name
      company: "Indian Institute of Technology Kanpur.",
      companylogo: require("./assets/images/sis.png"),
      date: "  June 2008",//Number of Times
      desc: "  Development of Web-based Spatial Information System for IIT Kanpur",//title:
     /* descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]*/
    },
    {
     
      role: "Name :  Surya Aditya Y",//name
      company: "Indian Institute of Technology Kanpur.",
      companylogo: require("./assets/images/rs3.png"),
      date: "  June 2008",//Number of Times
      desc: "High resolution remote sensing data for noise modeling using GIS",//title:
     /* descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]*/
    },
    {
     
      role: "Name :  Abishek Kumar Singh",//name
      company: "Indian Institute of Technology Kanpur.",
      companylogo: require("./assets/images/c1.png"),
      date: "  June 2007",//Number of Times
      desc: "  Development of point cloud simulator for LLRI onboard Chandrayaan -1",//title:
     /* descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]*/
    },
    {
     
      role: "Name :   Nishant Bhatnagar",//name
      company: "Indian Institute of Technology Kanpur.",
      companylogo: require("./assets/images/c1.png"),
      date: "  June 2007",//Number of Times
      desc: "  LiDAR return waveform simulation for LLRI instrument onboard Chandrayan-1",//title:
     /* descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]*/
    },
    {
     
      role: "Name :Raman Kumar",//name
      company: "Indian Institute of Technology Kanpur.",
      companylogo: require("./assets/images/rs1.png"),
      date: "  may 2007",//Number of Times
      desc: "   A model for determination of GPS satellite visibility for predicting GDOP using LiDAR data",//title:
     /* descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]*/
    },
    {
     
      role: "Name :   P. Parameshwar Reddy",//name
      company: "Indian Institute of Technology Kanpur.",
      companylogo: require("./assets/images/air.png"),
      date: "  June 2006",//Number of Times
      desc: "   Mathematical simulator for airborne altimetric LiDAR",//title:
     /* descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]*/
    },
    {
     
      role: "Name :  Ajay Dashora",//name
      company: "Indian Institute of Technology Kanpur.",
      companylogo: require("./assets/images/cor.png"),
      date: "September, 2005",//Number of Times
      desc: "   An investigation on photogrammetric modelling of CORONA satellite images for mapping purposes",//title:
     /* descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]*/
    },
    {
     
      role: "Name :Rajneesh Singh",//name
      company: "Indian Institute of Technology Kanpur.",
      companylogo: require("./assets/images/ligi.png"),
      date: "  May, 2005",//Number of Times
      desc: "   Detail investigations on building identification from LiDAR data using hough transform",//title:
     /* descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]*/
    },
    {
     
      role: "Name :   Ekta Amar",//name
      company: "Indian Institute of Technology Kanpur.",
      companylogo: require("./assets/images/livi.png"),
      date: " May, 2005",//Number of Times
      desc: "   Building reconstuction through DLT using historical photographs and laser scanning",//title:
     /* descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]*/
    },
    {
     
      role: "Name :    Parvesh Kumari",//name
      company: "Indian Institute of Technology Kanpur.",
      companylogo: require("./assets/images/3d.png"),
      date: "  May 2004",//Number of Times
      desc: "  Extraction of planar surface from 3D point clouds for building reconstruction",//title:
     /* descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]*/
    },
    {
     
      role: "Name :    Rajesh Khatri ( IT - BHU) ",//name
      company: "Indian Institute of Technology Kanpur.",
      companylogo: require("./assets/images/rs4.png"),
      date: "   April, 2003 ",//Number of Times
      desc: "   A study of scaling characteristics of river meandering using remote sensing",//title:
     /* descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]*/
    },
    {
     
      role: "Name :   Rajeev Kumar ( IT - BHU)",//name
      company: "IT_BHU.",
      companylogo: require("./assets/images/rs1.png"),
      date: "   April, 2003",//Number of Times
      desc: " Ground water prospecting for a pilot area in Sonbhadra district using remote sensing & GIS",//title:
     /* descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]*/
    },
    {
     
      role: "Name :     Anand Singh Chauhan ( IT- BHU)",//name
      company: "IT_BHU.",
      companylogo: require("./assets/images/de.png"),
      date: "  April, 2002",//Number of Times
      desc: " Algorithm develoment for automatic quantification of drainage network geomorphological parameters ",//title:
     /* descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]*/
    }
    
    
    
  ],
  bre:[
    {
     
      role: "Name :   Bharath Gandhi",//name
      company: "Indian Institute of Technology Kanpur.",
      companylogo: require("./assets/images/ligi.png"),
      date: "  August 2008",//Number of Times
      desc: "	  Development of Remote Sensing and GIS based approach for Archaeological Investigation in Varanasi and its surrounding,",//title:
     /* descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]*/
    },
    {
     
      role: "Name :   N Balaji",//name
      company: "Indian Institute of Technology Kanpur.",
      companylogo: require("./assets/images/sis.png"),
      date: "  June 2008",//Number of Times
      desc: "  Development of Web-based Spatial Information System for IIT Kanpur",//title:
     /* descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]*/
    },
    {
     
      role: "Name :  Surya Aditya Y",//name
      company: "Indian Institute of Technology Kanpur.",
      companylogo: require("./assets/images/rs2.png"),
      date: "  June 2008",//Number of Times
      desc: "High resolution remote sensing data for noise modeling using GIS",//title:
     /* descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]*/
    },
    {
     
      role: "Name :  Abishek Kumar Singh",//name
      company: "Indian Institute of Technology Kanpur.",
      companylogo: require("./assets/images/livi.png"),
      date: "  June 2007",//Number of Times
      desc: "  Development of point cloud simulator for LLRI onboard Chandrayaan -1",//title:
     /* descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]*/
    },
    {
     
      role: "Name :   Nishant Bhatnagar",//name
      company: "Indian Institute of Technology Kanpur.",
      companylogo: require("./assets/images/livi.png"),
      date: "  June 2007",//Number of Times
      desc: "  LiDAR return waveform simulation for LLRI instrument onboard Chandrayan-1",//title:
     /* descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]*/
    },
    {
     
      role: "Name :Raman Kumar",//name
      company: "Indian Institute of Technology Kanpur.",
      companylogo: require("./assets/images/gdop.png"),
      date: "  may 2007",//Number of Times
      desc: "   A model for determination of GPS satellite visibility for predicting GDOP using LiDAR data",//title:
     /* descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]*/
    },
    {
     
      role: "Name :   P. Parameshwar Reddy",//name
      company: "Indian Institute of Technology Kanpur.",
      companylogo: require("./assets/images/air.png"),
      date: "  June 2006",//Number of Times
      desc: "   Mathematical simulator for airborne altimetric LiDAR",//title:
     /* descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]*/
    },
    {
     
      role: "Name :  Ajay Dashora",//name
      company: "Indian Institute of Technology Kanpur.",
      companylogo: require("./assets/images/cor.png"),
      date: "September, 2005",//Number of Times
      desc: "   An investigation on photogrammetric modelling of CORONA satellite images for mapping purposes",//title:
     /* descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]*/
    },
    {
     
      role: "Name :Rajneesh Singh",//name
      company: "Indian Institute of Technology Kanpur.",
      companylogo: require("./assets/images/ligi.png"),
      date: "  May, 2005",//Number of Times
      desc: "   Detail investigations on building identification from LiDAR data using hough transform",//title:
     /* descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]*/
    },
    {
     
      role: "Name :   Ekta Amar",//name
      company: "Indian Institute of Technology Kanpur.",
      companylogo: require("./assets/images/dlt.png"),
      date: " May, 2005",//Number of Times
      desc: "   Building reconstuction through DLT using historical photographs and laser scanning",//title:
     /* descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]*/
    },
    {
     
      role: "Name :    Parvesh Kumari",//name
      company: "Indian Institute of Technology Kanpur.",
      companylogo: require("./assets/images/3d.png"),
      date: "  May 2004",//Number of Times
      desc: "  Extraction of planar surface from 3D point clouds for building reconstruction",//title:
     /* descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]*/
    },
    {
     
      role: "Name :    Rajesh Khatri ( IT - BHU) ",//name
      company: "Indian Institute of Technology Kanpur.",
      companylogo: require("./assets/images/rs1.png"),
      date: "   April, 2003 ",//Number of Times
      desc: "   A study of scaling characteristics of river meandering using remote sensing",//title:
     /* descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]*/
    },
    {
     
      role: "Name :   Rajeev Kumar ( IT - BHU)",//name
      company: "IT_BHU.",
      companylogo: require("./assets/images/rs4.png"),
      date: "   April, 2003",//Number of Times
      desc: " Ground water prospecting for a pilot area in Sonbhadra district using remote sensing & GIS",//title:
     /* descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]*/
    },
    {
     
      role: "Name :     Anand Singh Chauhan ( IT- BHU)",//name
      company: "IT_BHU.",
      companylogo: require("./assets/images/de.png"),
      date: "  April, 2002",//Number of Times
      desc: " Algorithm develoment for automatic quantification of drainage network geomorphological parameters ",//title:
     /* descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]*/
    }
    
    
    
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/air.png"),
      projectName: "Limulator  (Airborne Altimetric LiDAR Simulator) ",
      projectDesc: "Limulator aims at generating LiDAR data as per user specifications. The user is prompted to create a terrain of his/her choice using a library and to choose aircraft trajectory and sensor parameters. The simulator generates LiDAR data similar to a real LiDAR sensor for further display and analysis. The Limulator can be useful to instructors and students to generate variety of LiDAR data for experimentation. The readily available accurate ground truth and the ability to produce LiDAR data with different characteristics make this tool also suitable for algorithm (e.g. information extraction) testing. ",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/lidar.jpg"),
      projectName: "LASUtility Information",
      projectDesc: "Provides a range of utilities to work with LiDAR LAS format files, e.g. (1) displaying LAS files in both graphical and text format (2) trimming data files as per the selected area of interest on graphical display or as per the given set of data records, (3) stitching several LAS files together to form a large LAS file, (4) converting the LAS file to ASCII or vice versa etc.",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-512-2597413 ",
   number2:"+91 945346658",
  email_address: "blohani@iitk.ac.in",
  website1:"https://www.iitk.ac.in/",
  website2:"https://www.iitk.ac.in/civil/"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  workExperiences2,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
