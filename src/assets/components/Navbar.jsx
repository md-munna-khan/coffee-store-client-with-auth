import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <div>
           <button className="bg-purple-400 btn"> <Link to='/'>Home</Link></button>
           <button className="bg-purple-400 btn"> <Link to='/add/coffee'>add coffee</Link></button>
           <button className="bg-purple-400 btn"> <Link to='/register'>Register</Link></button>
           <button className="bg-purple-400 btn"> <Link to='/login'>Login</Link></button>
           <button className="bg-purple-400 btn"> <Link to='/users'>Users</Link></button>
           {/* <button className="bg-purple-400 btn"> <Link to='/updateCoffee'>update coffee</Link></button> */}
        </div>
    );
};

export default Navbar;