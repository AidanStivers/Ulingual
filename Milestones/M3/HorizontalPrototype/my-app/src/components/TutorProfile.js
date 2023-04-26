import React from 'react'
import "./StyleSheets/TutorCard.css"


function TutorProfile(props) {
    console.log("TutorProfile props: ", props)
    return(
    <div className='TutorsProfile'>
    <div className="UserInfo">
     <img className="ProfileImage" src={props.img}/>
     <h2 className="ProfileName">{props.name}</h2>
     <div className="ProfileCost"><h3>Cost: {props.cost}</h3></div>
    </div>
    <div className="UserDetails">
        <div><h3>Description: </h3>{props.desc}</div>
        <div><h3>Availability: </h3>{props.avab}</div>
    </div>

     <button onClick={()=>props.setIsProfileView(false)}>Return</button>   
    </div>

    
       
    );
}

export default TutorProfile;