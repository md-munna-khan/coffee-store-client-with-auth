import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const Users = () => {
    const loadedUsers = useLoaderData();
   
    const [users,setUsers]=useState(loadedUsers)

    const deleteUsers= id=>{
console.log(id)


Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    if (result.isConfirmed) {
    
    fetch(`http://localhost:5000/users/${id}`,{
        method:'delete'
    })
    .then(res=>res.json())
    .then(data=>{
        if(data.deletedCount >0){
            Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
              const remaining = users.filter(user=>user._id !==id);
                setUsers(remaining)
              
        }
    })
  }
    })


    }
    

    return (

        
        <div>
        <h2 className="text-3xl">users: {users.length}</h2>
        

        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
       
        <th>number</th>
        <th>Name</th>
        <th>email</th>
        <th>Created At</th>
        <th>Last Sign In TIme</th>
        <th>action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
     
       {
        users.map((user,index)=>   <tr key={user._id}>
            
                 <td>{index +1}</td>
                 <td>{user.name}</td>
                 <td>{user.email}</td>
                 
                 <td>{user.createdAt}</td>
                 <td>{user.lastSignInTime}</td>
                 <td>
                    <button className="btn">E</button>
                    <button onClick={()=> deleteUsers(user._id)} className="btn">X</button>
                 </td>
               
           </tr>)
       }
      
   
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Users;