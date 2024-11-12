import { useState } from "react";
export default function Form() {
  const [formdata, setFormdata] = useState({});
  return (
    <>
      <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="Email1"
            aria-describedby="emailHelp"
            onChange={(e)=>setFormdata({...formdata, [e.target.id]: e.target.value})}
          />
          <div id="emailHelp" class="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="Password1"
            onChange={(e)=>setFormdata({...formdata, [e.target.id]: e.target.value})}
          />
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="Check"   onChange={(e)=>setFormdata({...formdata, [e.target.id]: e.target.value})}/>
          <label class="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
      <p>{formdata.Email1 ? formdata.Email1:""}</p>
      <p>{formdata.Password1 ? formdata.Password1:""}</p>
      <p>{formdata.Check ? formdata.Check:""}</p>
    </>
  );
}
