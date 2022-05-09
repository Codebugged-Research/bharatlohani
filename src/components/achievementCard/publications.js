import React from "react";
import { useState } from "react";
import "../../containers/workExperience/WorkExperience.scss";
import '../../containers/workExperience/anim.scss';
import LineAnimation from "../../containers/workExperience/anim";
const  Publications =()=>{

    const [togg,setTogg]=useState(false);
    const handleClick =()=>{
      setTogg(!togg);
    }
 
 
  return(

          <div className="experience-container" id="Publications">
            <div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            <a onClick={handleClick}><LineAnimation name={"Publications"} /></a>
              <div className="experience-cards-div"  style ={{display:togg?'grid':'none'}}>
            <table className="table" style={{width:1300}}
           >
               <tr>
           
                   <th style={{width:1100}}>Name <LineAnimation name={""}  /></th>
                   <th style={{width:1000}}>Year <LineAnimation name={""} /></th>
                   <th style={{width:1100}}>Title <LineAnimation name={""} /></th>
                   <th style={{width:1000}}>Press <LineAnimation name={""} /></th>
                   
                </tr>
                <tr>
                    <td>Lohani, B., and Kumar R.</td>
                    <td>2008</td>
                    <td>GPS-GDOP prediction in urban environment using LiDAR data</td>
                    <td>Jr. of Applied Geodesy (In Press)</td>
                </tr>
            
                <tr>
                    <td>Biswas, S., and Lohani, B</td>
                    <td>2008</td>
                    <td>Development of high resolution 3D sound model with LiDAR
                    data and air photo</td>
                    <td>ISPRS Archive of XXI ISPRS congress, Beijing, 3-11 July 2008</td>
                </tr>
                <tr>
                    <td>Lohani, B., Mishra, R. K., Biswas, S.</td>
                    <td>2008</td>
                    <td>Development of airborne altimetric LiDAR simulator and its evaluation</td>
                    <td>Presented at XXI ISPRS Congress, Beijing, 3-11 July 2008</td>
                </tr>
                <tr>
                    <td>Lohani, B., Bhatnagar, N., Aditya, R</td>
                    <td>2008</td>
                    <td>Return pulse waveform simulation for LLRI onboard Chandrayan-1</td>
                    <td>Jr. Indian Society Remote Sensing, 36(1), pp. 1-11, March 2008.</td>
                </tr>
                <tr>
                    <td>Lohani, B. and Singh, R., </td>
                    <td>    
                    2008</td>
                    <td>Effect of data density, scan angle, and flying height on the accuracy of building extraction using LiDAR data</td>
                    <td>Geo Carto International, Vol. 23, No. 2, April 2008, 81–94</td>
                </tr>
                <h1>2007</h1>
                <tr>
                    <td>Biswas, S., Lohani, B.</td>
                    <td>2007</td>
                    <td>High resolution 3D sound modelling with LiDAR</td>
                    <td>ISRS National Conference on High resolution remote sensing and thematic applications, 18-20 Dec. 2007</td>
                </tr>
                <tr>
                    <td>Mishra, R. K., Lohani, B.,</td>
                    <td>2007</td>
                    <td>An object-oriented software development approach to design simulator for airborne altimetric LiDAR</td>
                    <td>National conference on "Emerging Trends in Information Technology"  SGITS Indore, INDIA, December 18-20, 2007</td>
                </tr>
                <tr>
                    <td>Mishra, R. K., Lohani, B.</td>
                    <td>2007</td>
                    <td>The reality behind a LiDAR simulator</td>
                    <td>Geospatial Today, November, 2007, pp 45-49</td>
                </tr>
                <tr>
                    <td>Lohani, B., Mishra, R. K</td>
                    <td>2007</td>
                    <td>Generating LiDAR data in laboratory: LiDAR simulator</td>
                    <td>International Archive of Photogrammetry and Remote Sensing XXXVI(3)W52 of  Laser Scanning 2007 and SilviLaser 2007, Espoo, Finland, September 12-14</td>
                </tr>
                <tr>
                    <td>Mishra, R. K., Lohani, B.</td>
                    <td>2007</td>
                    <td>Object-oriented software engineering for designing an aerial survey LiDAR Simulator</td>
                    <td>Spatial India 2007-IT and GIS strategy for infrastructure, Jaipur, INDIA, October 25-26, 2007</td>
                </tr>
                <tr>
                    <td>Dashora, A., Lohani, B., Malik J. N.,</td>
                    <td>2007</td>
                    <td>A repository of earth resource information-CORONA satellite programme</td>
                    <td>Current Science, 92(7), 926-932</td>
                </tr>
                <tr>
                    <td>Biswas, S., and Lohani, B.,</td>
                    <td>2007</td>
                    <td>Improved Sound Modeling with High Resolution LiDAR Data</td>
                    <td>GIM International, 21(8), August 2007</td>
                </tr>
                <tr>
                    <td>Lohani, B.,</td>
                    <td>2007</td>
                    <td>Immense help to all stakeholders: Interview with Dr. Brig. Siva Kumar</td>
                    <td>GIM International, 21(5), May 2007</td>
                </tr>
                <tr>
                    <td>Lohani, B.,</td>
                    <td>2007</td>
                    <td>LiDAR technology in India: Dominant trend</td>
                    <td>GIM International, 21(5), May 2007</td>
                </tr>
                <tr>
                    <td>Lohani, B.,</td>
                    <td>2007</td>
                    <td>Map World Forum 2007: a review</td>
                    <td>GIM International, 21(4), April 2007</td>
                </tr>
                <tr>
                    <td>Ghosh, S.,Lohani, B.,</td>
                    <td>2007</td>
                    <td>3D visualization of LiDAR data
                    
                    </td>
                    <td>GIM International, 21(2), 15-17</td>
                </tr>
                <tr>
                    <td>Lohani, B., Kumar, R.,</td>
                    <td>2007</td>
                    <td>A model for GPS-GDOP prediction in urban environment using LiDAR data</td>
                    <td>Proc. Of International conference on Optical 3D measurement techniques,  9 – 13 July, ETH Zurich, Switzerland</td>
                </tr>
                <tr>
                    <td>Ghosh, S,. Lohani, B.,</td>
                    <td>2007</td>
                    <td>Near-realistic and 3D visualisation of LiDAR data</td>
                    <td>Proc. Of ISPRS Joint Workshop on Visualisation and exploration of Geospatial data, 26 – 29 June, 2007, Stuttgart, Germany</td>
                </tr>
                <tr>
                    <td>Lohani, B., Mishra, R. K.,</td>
                    <td>2007</td>
                    <td>Modeling airborne altimetric LiDAR system to simulate data capture process</td>
                    <td>Proc. Of GI Forum International Conference, 3 – 6 July, 2007, Salzburg, Austria</td>
                </tr>
                <tr>
                    <td>Ghosh, S., and Lohani, B.,</td>
                    <td>2007</td>
                    <td>Development of a system for 3D visualization of LiDAR data</td>
                    <td>Proceedings of Map World Forum 2007, Hyderabad, India</td>
                </tr>
                <tr>
                    <td>Lohani, B., and Singh, R.</td>
                    <td>2007</td>
                    <td>Development of a Hough Transform based algorithm for extraction of buildings from actual and simulated LiDAR data,</td>
                    <td>Proceedings of Map World Forum 2007, Hyderabad</td>
                </tr>
                <tr>
                    <td>Lohani, B.,</td>
                    <td>2007</td>
                    <td>NPTEL-MHRD</td>
                    <td>Video on Basic Surveying</td>
                </tr>
                <tr>
                    <td>Lohani, B.,</td>
                    <td>2007</td>
                    <td>Airborne Altimetric LiDAR: Principle, Data Collection, Processing and Applications</td>
                    <td>Ed. By Dr. Krishna Mohan,  ISRO Tutor -Sensors and data processing, CSRE-IIT Bombay, 2007</td>
                </tr>
                <h1>2006</h1>
                <tr>
                    <td>Lohani, B., Mason, D. C., Scott, T. R., and Sreenivas B.,</td>
                    <td>2006</td>
                    <td>Extraction of tidal channel networks from aerial photographs alone and combined with laser altimetry</td>
                    <td>International Journal of Remote Sensing, 27(1), 5-25</td>
                </tr>
                <tr>
                    <td>Dashora, A, Sreenivas, B., Lohani, B., Mallik J. N., and Afroj, </td>
                    <td>2006</td>
                    <td>GCP collection for CORONA satellite photographs: Issues and Methodology</td>
                    <td>Jr. Indian Society Remote Sensing, 34(2), 153-160</td>
                </tr>
                <tr>
                    <td>Lohani, B., and Sreenivas, B.,</td>
                    <td>2006</td>
                    <td>Tracing of tidal channels through remote sensing</td>
                    <td>Geospatial Today, 5(3), December 2006</td>
                </tr>
                <tr>
                    <td>Lohani, B., Reddy, P., and Mishra, R.,</td>
                    <td>2006</td>
                    <td>Airborne Altimetric LiDAR Simulator: An education tool</td>
                    <td>International Archives of the Photogrammetry, Remote Sensing and Spatial Information Science, XXXVI(6), Tokyo, Japan</td>
                </tr>
                <tr>
                    <td>Lohani, B., and Sreenivas, B. </td>
                    <td>2006</td>
                    <td>Tidal channel identification from remotely sensed data using shape and spectral characteristics</td>
                    <td>International Archives of the Photogrammetry, Remote Sensing and Spatial Information Science, Goa, India</td>
                </tr>
                <h1>2005</h1>
                <tr>
                    <td>Lohani, B., and Mason, D. C.,</td>
                    <td>2005</td>
                    <td>A case study on error identification and minimization in Airborne Altimetric LiDAR data</td>
                    <td>International Journal of Geoinformatics, 1(3), 53-61</td>
                </tr>
                <tr>
                    <td>Lohani, B.,</td>
                    <td>2005</td>
                    <td>Reviewing aerial survey in India: Interview with Mr. K Kalyanraman</td>
                    <td>GIM International, 19(8), August 2005</td>
                </tr>
                <h1>2004</h1>
                <tr>
                    <td>Lohani, B.,  Agrawal, N., Agrawal, N., </td>
                    <td>2004</td>
                    <td>Airborne Altimetric LiDAR Simulator(invited paper).</td>
                    <td>GIS@development, 6(5), May 2004</td>
                </tr>
                <tr>
                    <td>Lohani, B.,</td>
                    <td>2004</td>
                    <td>Geomatics Education in India: Interview with Dr. P S Roy</td>
                    <td>GIM International, 9(2) June 2004</td>
                </tr>
                <tr>
                    <td>D. C. Mason, M. Marani, E. Belluco, A. Feola, R. Katzenbeisser, B. Lohani,  M. Menenti, D. Paterson, T. Scott, S. Silvestri, C. Wang and H-J. Wang,</td>
                    <td>2004</td>
                    <td>LiDAR mapping of tidal marshes for ecogeomorphological modelling in the TIDE project</td>
                    <td>8th International Conference on Remote Sensing for Marine and Coastal Environments, 17-19 May 2005 in Halifax, Nova Scotia, Canada.</td>
                </tr>
                <tr>
                    <td>Lohani, B., Mason, D. C., Bist, H. S.,</td>
                    <td>2004</td>
                    <td>Semi-automatic Multi-Level Approach for Extraction of Tidal Channels from Aerial Photographs and Hyperspectral Data</td>
                    <td>Proc. Of Map India 2004, 28-30 January 2004, New Delhi</td>
                </tr>
                <tr>
                    <td>Agrawal, N., Agrawal, N, Lohani, B.,</td>
                    <td>2004</td>
                    <td>Development of a Simulator for Airborne Altimetric LiDAR</td>
                    <td>Proc. Of Map India 2004, 28-30 January, New Delhi.</td>
                </tr>
                <tr>
                    <td>Dikshit, O., Lohani, B.</td>
                    <td>2004</td>
                    <td>    
                    Status of Education in Space Science at IITs and ISc</td>
                    <td>India-United States Conference and Exhibition on Space Science, application and Commerce, June 21-25, 2004, Bangalore</td>
                </tr>
                <tr>
                    <td>Ekta, A., Lohani, B.</td>
                    <td>2004</td>
                    <td>Registration of laser point clouds for a  large and complex building,</td>
                    <td>Third International Symposium on New Technologies for Urban Safety of Mega Cities in Asia, 18-19 October 2004, Agra.</td>
                </tr>
                <tr>
                    <td>Singh, R, Lohani, B., Bajpai, K.N.</td>
                    <td>2004</td>
                    <td>Laser altimetry for safer urban environment</td>
                    <td>Third International Symposium on New Technologies for Urban Safety of Mega Cities in Asia, 18-19 October 2004, Agra.</td>
                </tr>
                <tr>
                    <td>Lohani, B., and Flood, M.,</td>
                    <td>2003</td>
                    <td>Airborne Altimetric LiDAR-Where does India stand?</td>
                    <td>GIS@development, 7(5), May 2003</td>
                </tr>
                <tr>
                    <td>Spikes, J., and Lohani, B.,</td>
                    <td>2003</td>
                    <td>Spatial Information Policy in India</td>
                    <td>GIM-International, 17(6), June 2003</td>
                </tr>
                <tr>
                    <td>Roy, P.C, Joshi, P. K., and Lohani, B.,</td>
                    <td>2003</td>
                    <td>LiDAR Remote Sensing For Forest Eco-System Studies in Geoinformatics for Tropical Ecosystems,</td>
                    <td>Asian Association of Remote Sensing, Japan.</td>
                </tr>
               

            </table>
                       		
    
                    

             
              </div>
              
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
          </div>
        
    );
}
export default Publications;

