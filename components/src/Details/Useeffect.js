// import React,{useEffect,useState} from "react";
// export default function Useeffect(){
//      const [option,setoption]=useState("")
//      const [array,setarray]=useState([])
//      const [loop,setLoop]=useState([])

//     const handleinput=(e)=>{
//        setoption(e.target.value)  
//     }

//    const handleSubmit=(e)=>{
// //    e.preventdefault()
//    setarray([...array,option])
//    setoption("")
//    }
//    const handlecreate=()=>{
//     array.forEach((item)=>{
//         let text=item.replace("@gmail.com","")
//         setLoop([...loop,text])
//         // console.log("item",item)

//     })

//    }
//    useEffect(()=>{
//     // remove @gmail.com text in every emill
//     // store the updated string
//     handlecreate
//    },[array])
//    console.log(loop)


//     return(
//         <>
//         <label>email</label>
//         <input type="email" onChange={handleinput}></input>
//         <button type="submit"onClick={handleSubmit}>submit</button>
//         {loop.map((y)=>(
//             <p>{y}</p>
//         ))}
//         </>
        

//     )
// }