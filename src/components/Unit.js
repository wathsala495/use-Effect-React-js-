import React from 'react'

export default function Unit(props) {
  console.log("name:"+props.name)
  return (
    <div className="">
      <h2>{props.name}</h2>
      
     {/* <img src={props.image} alt={props.name}/>
     <h3>{props.name}</h3> 
     <p><span>{props.city}</span><span>{props.position}</span></p> */}
    </div>
  )
}
