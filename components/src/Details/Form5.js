import React, { useState } from "react";

export default function Form5() {
    const [formData, setFormData] = useState({
        Product: "",
        Quantity: "",
        Price: "",
        Total: ""
    });
    const [array, setArray] = useState([]);
    const [edit,setEdit]=useState(false)

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [id]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(edit){
            setArray(array.map((val)=>val.product===formData.product?formData:val))
            setEdit(false)
          }else{
            setArray([...array, formData]);
          }
        const quantity = parseFloat(formData.Quantity) || 0; 
        const price = parseFloat(formData.Price) || 0; 
        const total = (quantity * price).toFixed(2); 
        const newData = {
            Product: formData.Product,
            Quantity: formData.Quantity,
            Price: formData.Price,
            Total: total,
        };
        setArray((prevArray) => [...prevArray, newData]);
        setFormData({ Product: "", Quantity: "", Price: "", Total: "" });
    };
    function handleDelete(name){
        setArray(array.filter((val)=>val.Product !== name))
    }
    function handleEdit(name) {
        setFormData(array.filter((val) => val.Product === name)[0]);
        setEdit(true)
      }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="Product">Product:</label>
                <input type="text" id="Product" value={formData.Product} onChange={handleInputChange} />

                <label htmlFor="Quantity">Quantity:</label>
                <input type="text" id="Quantity" value={formData.Quantity} onChange={handleInputChange} />

                <label htmlFor="Price">Price:</label>
                <input type="text" id="Price" value={formData.Price} onChange={handleInputChange} />

                <button type="submit">Add Item</button>
            </form>
            { array.length>0 &&(<table>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Total</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {array.map((val, index) => (
                        <tr key={index}>
                            <td>{val.Product}</td>
                            <td>{val.Quantity}</td>
                            <td>{val.Price}</td>
                            <td>{val.Total}</td>
                            <td>
                                <a className="btn btn-danger" onClick={()=>handleDelete(val.Product)}>Delete</a>
                                <a className="ms-2 btn btn-warning" onClick={()=>handleEdit(val.Product)}>Update</a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>)}

        </>
    );
}