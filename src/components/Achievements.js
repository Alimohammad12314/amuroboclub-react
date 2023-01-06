import React from 'react'
import content from "../assets/cms/content.json"

const Achievements = () => {
  return (
    <div id='achievements'>
    <div id="service" class="service">
      <div class="container">
         <div class="row">
           
            <div className="heading_main text_align_center" style={{paddingTop:"100px"}}>
						   <h2>Achievements</h2>
                        </div>
         </div>


         
         <div  className="row">
            {content[0].achievements.map((object, index) => (
         
         <div className="col-md-4 col-sm-6">
            <div key={index}id="ho_color" class="service_box">
               {/* <img src={object.image} style={{marginLeft:"15px", height: "140px", width: "140px"}}  alt="#" height={85} width={125} /> */}
               {/* <h3 style={{marginLeft:"15px"}}>{object.text}</h3> */}
               <p style={{marginLeft:"15px"}}>{object.text}</p>
            </div>
         </div>
         
      ))}
            </div>
           
         
      </div>
   </div>
   </div>

  )
}

export default Achievements
