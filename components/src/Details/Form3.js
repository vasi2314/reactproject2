import React, { useState } from "react";
export default function Form3(){
    const [formdata, setFormdata] = useState({});
    const [status, setStatus] = useState(false);
    const [array,setarray] =useState([]);

    
  const newchage = (e) => {
    setFormdata(() => ({ ...formdata, [e.target.id]: e.target.value }));
  };

  const formdata1 = (e) => {
    e.preventDefault();
    setStatus(true);
    setarray([...array,formdata])
    setFormdata({
        TitleName:"",url:"",Description:""
    })
    console.log(array)
  }
  return(
    <>
    <form onSubmit={formdata1}>
                <label for="TitletName">Title Name:</label>
                <input type="text" id="TitleName" name="TitleName" value={formdata.TitleName} onChange={newchage}/>
                <label for="image">image:</label>
                <input type="url "  id="url" name="url" value={formdata.url} onChange={newchage} />
                <label for="Description">Description:</label>

                <input type="text" id="Description" name="Description" value={formdata.Description} onChange={newchage} />
                <input type="submit" value="Submit" />
            </form>
            <div className="v">
      
            {array&&array.map((s)=>
            <>
            <div className="v1">
            <p>TitleName:{s.TitleName}</p>
           <img src={s.url} />
            <p>Description:{s.Description}</p>
            </div>
            </>
            )}
            </div>
    </>
  )
}