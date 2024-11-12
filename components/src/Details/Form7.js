import React, { useState } from "react";
export default function Form7() {
  const [formdata, setFromdata] = useState({});
  const [array, setArray] = useState([]);
  const [edit,setEdit]=useState(false);
  const newchage = (i) => {
    setFromdata(() => ({ ...formdata, [i.target.id]: i.target.value }));
  };
  const arraydata = (i) => {
    i.preventDefault();
    if(edit){
      setArray(array.map((val)=>val.product===formdata.product?formdata:val))
      setEdit(false)
    }else{
      setArray([...array, formdata]);
    }
    setFromdata({
        product:"",
        quantity:"",
        price:"",
    });
    console.log(array);
}
function handleDelete(model) {
    setArray(array.filter((item) => item.product !== model));
  }
  function handleEdit(model) {
    setFromdata(array.filter((item) => item.product === model)[0]);
    setEdit(true)
  }
  return(
    <>
    <form onSubmit={arraydata}>
                <label htmlFor="Product">Product:</label>
                <input type="text" id="product" value={formdata.product} onChange={newchage} />

                <label htmlFor="Quantity">Quantity:</label>
                <input type="text" id="quantity" value={formdata.quantity} onChange={newchage} />

                <label htmlFor="Price">Price:</label>
                <input type="text" id="price" value={formdata.price} onChange={newchage} />

                <button type="submit">Add Item</button>
            </form>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {array.map((item, index) => (
                        <tr key={index}>
                            <td>{item.product}</td>
                            <td>{item.quantity}</td>
                            <td>{item.price}</td>
                            <td>
                                <a className="btn btn-danger" onClick={()=>handleDelete(item.product)}>Delete</a>
                                <a className="ms-2 btn btn-warning"onClick={()=>handleEdit(item.product)}>Edit</a>
                            </td>
                        </tr>

                    ))}
                </tbody>
            </table>
    </>
  )
}