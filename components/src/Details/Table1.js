export default function Table1({id,firstName,age,gender,email}){
    return(
       <>
       <table>
     <tr><td><h1>{id}</h1></td>
     <td><h1>{firstName}</h1></td>
    <td><h1>{age}</h1></td>
     <td><h1>{gender}</h1></td>
     <td><h1>{email}</h1></td></tr>
       </table>
       </>
    )
   
   }