import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const Register = () => {
    const {createUser}=useContext(AuthContext)
    const handleRegister= e=>{
        e.preventDefault()
        const name = e.target.name.value
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(email,password)
      

        createUser(email,password,name)
        .then(result=>{
            console.log(result.user)
            const createdAt = result.user.metadata.creationTime
            const newUser= {name,email,createdAt}
// save the data info in server
fetch('https://coffe-shop-server-snowy.vercel.app/users',{
  method:'post',
  headers:{
    'content-type': 'application/json'
  },
  body:JSON.stringify(newUser)
})
.then(res=>res.json())
.then(data=>{
  if(data.insertedId){
    console.log('user create to db',data)
  }
  
})


        }).catch(error=>{
            console.log('error',error.message)
        })
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
          
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="name" name='name' className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" name='email' className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Register;