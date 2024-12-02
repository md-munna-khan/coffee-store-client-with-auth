import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const CoffeeCards = ({coffee,coffees,setCoffees }) => {
 const{_id,name,quantity,supplier,taste,category,details,photo}=coffee
 const handleDelete =_id=>{
    console.log(_id)
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
       
        console.log('delete confirmed')
        fetch(`https://coffe-shop-server-snowy.vercel.app/coffee/${_id}`,{
            method:"DELETE"
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.deletedCount>0){
   Swal.fire({
            title: "Deleted!",
            text: "Your coffee has been deleted.",
            icon: "success"
          });

          const remaining= coffees.filter(cof=>cof._id !== _id)
          setCoffees(remaining)
            }
        })
        }
      });
 }
    return (
        <div className="card card-side bg-base-100 shadow-xl">
      <div className="flex  w-full pr-4">
      <figure>
          <img src={photo} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">name{name}</h2>
          <p>{quantity}.</p>
          <p>{supplier}.</p>
          <p>{taste}.</p>
      </div>
          <div className="flex flex-col gap-4 ">
            <button className="btn btn-primary">View</button>
           <Link to={`updateCoffee/${_id}`}>Edit</Link>
            <button onClick={()=>handleDelete(_id)} className="btn btn-warning">X</button>
          </div>
        </div>
      </div>
    );
};

export default CoffeeCards;