import React,{useState} from "react";
export default function Object(){
  const[formdata,setFormdata]=useState({})  
  const[result,setResult]=useState("")
  // const[array,setArray]=useState([])import React,{useState}

  const _handleEmail=(e)=>{
    setFormdata((formdata)=>({...formdata, [e.target.className]:e.target.value}))
  }
  const _handlePassword=(e)=>{
    setFormdata((formdata)=>({...formdata, [e.target.className]:e.target.value}))
  }
 
 
  const handleSubmit=(e)=>{
    e.preventDefault();
    // setArray([...array,result])
    // setFormdata({
    //   emailid:"",pass:""
    // })
     let text=formdata.emailid.replace("@gmail.com","!")
// arun! 
     let total="Hi " + text.charAt(0).toUpperCase()+text.slice(1);
    setResult(total)
     console.log("formdata",total)
  }
 
return(
    <>
    <form >
    <label>E-mail id</label>
    <input type="email" className="emailid" onChange={_handleEmail}value={formdata.emailid} />
    <label>password</label>
    <input type="password" className="pass" onChange={_handlePassword} value={formdata.pass}/>
    <button onClick={handleSubmit}>submit</button>

    </form>
    <p>{result}</p>
    
    </>
)
}