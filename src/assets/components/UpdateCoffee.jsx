import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {
    const coffee = useLoaderData()
    const{_id,name,quantity,supplier,taste,category,details,photo}=coffee
    const handleUpdateAddCoffee = event=>{
        event.preventDefault()
        const form = event.target;
        const name = form.name.value
        const quantity = form.quantity.value
        const supplier = form.supplier.value
        const taste = form.taste.value
        const category = form.category.value
        const details = form.details.value
        const photo = form.photo.value
        const updateCoffee = {name,quantity,supplier,taste,category,details,photo}
        console.log(updateCoffee)
        // send data to server
        fetch(`http://localhost:5000/coffee/${_id}`,{
            method:'PUT',
            headers:{
                'content-type':"application/json"
               
            },
      
            body:JSON.stringify(updateCoffee)
        })
        .then(res=> res.json())
        .then((data)=>{
            console.log(data)
            if(data.modifiedCount>0){
                Swal.fire({
                    title: 'success!',
                    text: 'coffee updated successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
       
       
    }
    return (
        <div className='bg-[#F4F3F0] w-11/12 mx-auto p-24'>
        <h2 className='text-4xl'>update coffee{name}</h2>
        <form onSubmit={handleUpdateAddCoffee}>
            {/* form */}
            <div className='flex'>
                <div className='form-control md:w-1/2'>
                    <label className='label'>
                        <span > Name</span>
                    </label>
                    <label className='label'>
                     <input className='input input-bordered w-full' type="text" defaultValue={name} placeholder='coffee name' name="name" id="" />
                    </label>
                </div>
                <div className='form-control md:w-1/2'>
                    <label className='label'>
                        <span > chef</span>
                    </label>
                    <label className='label'>
                     <input className='input input-bordered w-full' type="text" placeholder='coffee chef' defaultValue={quantity}  name="quantity" id="" />
                    </label>
                </div>
            </div>
            {/* end */}
            {/* form */}
            <div className='flex'>
                <div className='form-control md:w-1/2'>
                    <label className='label'>
                        <span > supplier</span>
                    </label>
                    <label className='label'>
                     <input className='input input-bordered w-full' type="text"defaultValue={supplier}  placeholder='supplier' name="supplier" id="" />
                    </label>
                </div>
                <div className='form-control md:w-1/2'>
                    <label className='label'>
                        <span > taste</span>
                    </label>
                    <label className='label'>
                     <input className='input input-bordered w-full' type="text" placeholder='taste chef' name="taste" defaultValue={taste}  id="" />
                    </label>
                </div>
            </div>
            {/* end */}
            {/* form */}
            <div className='flex'>
                <div className='form-control md:w-1/2'>
                    <label className='label'>
                        <span > category</span>
                    </label>
                    <label className='label'>
                     <input className='input input-bordered w-full' type="text" placeholder='category' name="category" defaultValue={category}  id="" />
                    </label>
                </div>
                <div className='form-control md:w-1/2'>
                    <label className='label'>
                        <span > Details</span>
                    </label>
                    <label className='label'>
                     <input className='input input-bordered w-full' type="text" defaultValue={details}  placeholder='Details' name="details" id="" />
                    </label>
                </div>
               
            </div>
            {/* end */}
            <div className='form-control w-full'>
                    <label className='label'>
                        <span > photo URL</span>
                    </label>
                    <label className='label'>
                     <input className='input input-bordered w-full' type="text" placeholder='photo URl' name="photo" defaultValue={photo}  id="" />
                    </label>
                </div>
     <input className='btn btn-warning w-full' type="submit" value="add coffee" />
       
        </form>
    </div>
    );
};

export default UpdateCoffee;