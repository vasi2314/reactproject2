import React, { useState } from "react";
export default function Form4() {
  const [formdata, setFormdata] = useState({});
  const [status, setStatus] = useState(false);
  const [array,setarray] = useState([]);

  const newchage = (e) => {
    setFormdata(() => ({ ...formdata, [e.target.id]: e.target.value }));
  };

  const formdata1 = (e) => {
    e.preventDefault();
    const quantity =parseFloat(formdata.quantity) || 0;
    const price =parseFloat(formdata.price) || 0;
    const total =(quantity*price).toFixed(2);
    setStatus(true);
    setarray([...array,formdata])
    setFormdata({
      productname:"",quantity:"",price:""
    })
    console.log(array);
  };
  return (
    <>
      <h1>Product Form</h1>
      <form onSubmit={formdata1}>
        <label for="product-name">Product Name:</label>
        <input
          type="text"
          id="productname"
          name="product_name" value={formdata.productname}
          onChange={newchage}
        />
        <label for="quantity">Quantity:</label>
        <input
          type="number"
          id="quantity"
          name="quantity" value={formdata.quantity}
          onChange={newchage}
        />
        <label for="price">Price:</label>
        <input type="text" id="price" name="price" value={formdata.price} onChange={newchage} />
        <button type="submit">Add to Cart</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>total</th>
          </tr>
        </thead>
      </table>
      {/* {status ? (
        // <>
        //   <p>product-name:{formdata.productname}</p>
        //   <p>quantity:{formdata.quantity}</p>
        //   <p>price:{formdata.price}</p>
        // </>
      ) : (
        ""
      )} */}
      {array &&array.map((s)=>
        <>
          <p>product-name:{s.productname}</p>
          <p>quantity:{s.quantity}</p>
          <p>price:{s.price}</p>
        </>
      )

      }
    </>
  );
}
