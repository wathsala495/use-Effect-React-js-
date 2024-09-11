import React, {  useState,useEffect } from "react"
import './App.css'




const App =()=>{

  const [apiId,setApiId]=useState("1");
console.log(apiId)
//pass callback function and dependancy array

const[Data,setData]=useState({})
const  [serach,setSearch]=useState(0)
console.log("Data:"+ Data)
// useEffect(()=>{
//     console.log("useEffect running..")
//     if(apiId.length>0){
//       console.log("running if")
//       const apiCall =async ()=>{
//        const res= await  fetch(`https://jsonplaceholder.typicode.com/todos/${apiId}`)
//        const data = await res.json()
//        if(data){
//         setData(data)
//        }
//       }
//       apiCall()
//     }
    
// },[apiId])

//with button
useEffect(()=>{
    console.log("useEffect running..")
    if(apiId.length>0){
      console.log("running if")
      const apiCall =async ()=>{
       const res= await  fetch(`https://jsonplaceholder.typicode.com/todos/${apiId}`)
       const data = await res.json()
       if(data){
        setData(data)
       }
      }
      apiCall()
      //cleanup process
      return ()=>{
        console.log("cleanup")
        apiCall()
           }
    }
   
    
},[serach])

 return(
  <div>
    {/* <h2>{Data.title}</h2> */}
    <input type="text" onChange={(e)=>{
      e.preventDefault()
      setApiId(e.target.value)}} value={apiId}/>
      <button onClick={()=>{setSearch(pre=>pre===0?1:0)}}>Search</button>
      {/* {Data?.map((d)=>{
         <h3>{d.id}</h3>
      })} */}
      {
        Data && (
          <div>
<h2>{Data.title}</h2>
<p>{Data.completed}</p>

          </div>
        )
      }

  </div>
 )
}

export default App;