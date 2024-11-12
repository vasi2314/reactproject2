import React, { useState } from "react";
export default function Object3(){
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
        url:"", TitleName:"",Description:""
    })
    console.log(array)
  }
  return(
    <>
    <form onSubmit={formdata1}>
                <label for="image">image:</label>
                <input type="url" id="url" name="url" value={formdata.url} onChange={newchage}/>
                <label for="TitleName">Titlename:</label>
                <input type="text "  id="TitleName" name="TitleName" value={formdata.TitleName} onChange={newchage} />
                <label for="Description">Description:</label>

                <input type="text" id="Description" name="Description" value={formdata.Description} onChange={newchage} />
                <input type="submit" value="Submit" />
            </form>
            <div className="v">
      
            {array&&array.map((s)=>
            <>
            <div className="v1">
            <img src={s.url} />
            <p>TitleName:{s.TitleName}</p>
            <p>Description:{s.Description}</p>
            </div>
            </>
            )}
            </div>
    </>
  )
}
