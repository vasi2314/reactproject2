import React, { useState } from "react";

export default function Form2() {
  const [formdata, setFormdata] = useState({});
  const [status, setStatus] = useState(false);

  const newchage = (e) => {
    setFormdata(() => ({ ...formdata, [e.target.name]: e.target.value }));
  };

  const formdata1 = (e) => {
    setStatus(true);
    console.log(formdata);
  };

  return (
    <>
      <form onSubmit={formdata1} method="post">
        <label htmlFor="name">Name:</label>
        <br />
        <input
          type="text"
          id="name"
          name="name"
          required
          onChange={newchage}
        />
        <br />
        <br />

        <label htmlFor="email">Email:</label>
        <br />
        <input
          type="email"
          id="email"
          name="email"
          required
          onChange={newchage}
        />
        <br />
        <br />

        <label htmlFor="message">Message:</label>
        <br />
        <textarea
          id="message"
          name="message"
          rows="4"
          cols="50"
          required
          onChange={newchage}
        ></textarea>
        <br />
        <br />

        <input type="submit" value="Submit" />
      </form>

      {status?<> (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{formdata.name}</td>
              <td>{formdata.email}</td>
              <td>{formdata.message}</td>
            </tr>
          </tbody>
        </table>
      )</>:""}
    </>
  );
}
