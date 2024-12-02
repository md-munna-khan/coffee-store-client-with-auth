
import { useLoaderData } from 'react-router-dom'
import './App.css'
import Navbar from './assets/components/Navbar'
import CoffeeCards from './assets/components/CoffeeCards'
import { useState } from 'react'

function App() {
const loadedCoffees= useLoaderData()
const [coffees,setCoffees]=useState(loadedCoffees)
  return (
    <>
    <header className=''>
    <Navbar></Navbar></header>
    
      <h1>hot coffee {coffees.length}</h1>
 <div className='grid md:grid-cols-2 gap-4'>
 {
      coffees.map(coffee=> <CoffeeCards 
      key={coffee._id}
      coffee={coffee}
      coffees={coffees}
      setCoffees={setCoffees}
      ></CoffeeCards>)
     }
 </div>
    </>
  )
}

export default App
