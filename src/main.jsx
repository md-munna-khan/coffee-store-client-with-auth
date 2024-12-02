import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddCoffee from './assets/components/AddCoffee.jsx';
import UpdateCoffee from './assets/components/UpdateCoffee.jsx';
import Login from './assets/components/Login.jsx';
import Register from './assets/components/Register.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import Users from './assets/components/Users.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader:()=> fetch('https://coffe-shop-server-snowy.vercel.app/coffee')
  },
  {
path:'/add/coffee',
element:<AddCoffee></AddCoffee>
  },
 
  {
    path:'updateCoffee/:id',
    element:<UpdateCoffee></UpdateCoffee>,
    loader:({params})=> fetch(`https://coffe-shop-server-snowy.vercel.app/coffee/${params.id}`)
  },
  {
path:'/login',
element:<Login></Login>
  },
  {
    path:'/register',
    element:<Register></Register>
  },
  {
    path:'/users',
    element:<Users></Users>,
    loader:()=> fetch('https://coffe-shop-server-snowy.vercel.app/users')
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <AuthProvider>
  <RouterProvider router={router} />
  </AuthProvider>
  </StrictMode>,
)
