import React, { useState } from "react";
export default function Object1() {
    const [formdata, setFromdata] = useState([
        { username: "arun", password: 877979 },
        { username: "deepak", password: 9894754 },
        { username: "vinoth", password: 46754874 }])
    const clickchange = () => {

        // let value={...formdata,username: "saranya"}
        // console.log("formdata",formdata)
        // setFromdata({ ...formdata, username: "saranya" })
        // console.log("value",value)

    }

    
    const arraydata = () => {
        console.log("formdata",formdata)
        let array = []



        for (let i = 0; i < formdata.length; i++) {
            if (formdata[i].username === "vinoth") {
                let value = { ...formdata[i], username: "prakash" }
                array.push(value)
            } else {
                array.push(formdata[i])
            }
        }









        
        console.log("array",array)
        setFromdata(array)
    }
    return (
        <>
            <button onClick={arraydata}>update</button>
        </>
    )


}