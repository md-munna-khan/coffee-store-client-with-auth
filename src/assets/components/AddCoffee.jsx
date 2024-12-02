import React from 'react';
import Swal from 'sweetalert2'
const AddCoffee = () => {

    const handleAddCoffee = event=>{
        event.preventDefault()
        const form = event.target;
        const name = form.name.value
        const quantity = form.quantity.value
        const supplier = form.supplier.value
        const taste = form.taste.value
        const category = form.category.value
        const details = form.details.value
        const photo = form.photo.value
        const newCoffee = {name,quantity,supplier,taste,category,details,photo}
        console.log(newCoffee)
        // send data to server
        fetch('https://coffe-shop-server-snowy.vercel.app/coffee',{
            method:'POST',
            headers:{
                'content-type':"application/json"
               
            },
      
            body:JSON.stringify(newCoffee)
        })
        .then(res=> res.json())
        .then((data)=>{
            console.log(data)
            if(data.insertedId>0){
                Swal.fire({
                    title: 'success!',
                    text: 'user added successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
       
       
    }
    return (
        <div className='bg-[#F4F3F0] w-11/12 mx-auto p-24'>
            <h2>Add coffee</h2>
            <form onSubmit={handleAddCoffee}>
                {/* form */}
                <div className='flex'>
                    <div className='form-control md:w-1/2'>
                        <label className='label'>
                            <span > Name</span>
                        </label>
                        <label className='label'>
                         <input className='input input-bordered w-full' type="text" placeholder='coffee name' name="name" id="" />
                        </label>
                    </div>
                    <div className='form-control md:w-1/2'>
                        <label className='label'>
                            <span > chef</span>
                        </label>
                        <label className='label'>
                         <input className='input input-bordered w-full' type="text" placeholder='coffee chef' name="quantity" id="" />
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
                         <input className='input input-bordered w-full' type="text" placeholder='supplier' name="supplier" id="" />
                        </label>
                    </div>
                    <div className='form-control md:w-1/2'>
                        <label className='label'>
                            <span > taste</span>
                        </label>
                        <label className='label'>
                         <input className='input input-bordered w-full' type="text" placeholder='taste chef' name="taste" id="" />
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
                         <input className='input input-bordered w-full' type="text" placeholder='category' name="category" id="" />
                        </label>
                    </div>
                    <div className='form-control md:w-1/2'>
                        <label className='label'>
                            <span > Details</span>
                        </label>
                        <label className='label'>
                         <input className='input input-bordered w-full' type="text" placeholder='Details' name="details" id="" />
                        </label>
                    </div>
                   
                </div>
                {/* end */}
                <div className='form-control w-full'>
                        <label className='label'>
                            <span > photo URL</span>
                        </label>
                        <label className='label'>
                         <input className='input input-bordered w-full' type="text" placeholder='photo URl' name="photo" id="" />
                        </label>
                    </div>
         <input className='btn btn-warning w-full' type="submit" value="add coffee" />
           
            </form>
        </div>
    );
};

export default AddCoffee;