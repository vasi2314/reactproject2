import React, { useState } from "react";

export default function Formstate2() {
  const [formdata, setFormdata] = useState({name:"react"});
  const [data, setData] = useState([]);

  const handleChange = (e) => {
    // const { id, value } = e.target;
    setFormdata(({ ...formdata, [e.target.id]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setData([...data, formdata]);
    setFormdata({
      name: "",
      phone: "",
      email: "",
      password: "",
    });
    // Handle form submission logic h
    console.log(formdata);
  };

  return (
    <div class="container mt-5">
      <form onSubmit={handleSubmit} class="mb-4">
        <div class="mb-3">
          <label for="name" class="form-label">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            class="form-control"
            required
            onChange={handleChange}
            value={formdata.name}
          />
        </div>

        <div class="mb-3">
          <label for="email" class="form-label">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            class="form-control"
            required
            onChange={handleChange}
            value={formdata.email}
          />
        </div>

        <div class="mb-3">
          <label for="password" class="form-label">
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            class="form-control"
            required
            onChange={handleChange}
            value={formdata.password}
          />
        </div>

        <div class="mb-3">
          <label for="phone" class="form-label">
            Phone Number:
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            class="form-control"
            required
            onChange={handleChange}
            value={formdata.phone}
          />
        </div>

        <button type="submit" id="button" class="btn btn-primary">
          Register
        </button>
      </form>

      {data && data.length > 0 && (
        <table class="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Phone Number</th>
            </tr>
          </thead>
          <tbody>
            {data.map((val, index) => (
              <tr key={index}>
                <td>{val.name}</td>
                <td>{val.email}</td>
                <td>{val.password}</td>
                <td>{val.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}