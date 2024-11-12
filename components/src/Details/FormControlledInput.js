import { useState } from "react";
export default function FormControlledinput(){
    const [age,setAge]=useState();

    function onNameChange(e){
        const age1=e.target.value;
        if( age1<=150)
            setAge(age1);
    }
  
    return(
        <>
        <form>
            <input type="number" id="age" onChange={(e)=>{onNameChange(e)}} value={age}/>
        </form>
    
        <p>{age}</p>
        </>
    
    )
}