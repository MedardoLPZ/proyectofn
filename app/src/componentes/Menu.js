import React from 'react'
import { Link } from 'react-router-dom'

function Menu() {
  return (
    <div>

<div className='md:w-auto lg:w-auto'>


<nav class="bg-blue-500 p-4">
    <div class="container mx-auto">
      <div class="flex items-center justify-between">
        <a class="text-white text-xl font-bold" href="http://localhost:3000/">USAP</a>
        <div class="hidden md:flex space-x-4">
          <a class="text-white" href="http://localhost:3000/director">Inicio</a>
          <a class="text-white" href="http://localhost:3000/nosotros">Acerca de</a>
        </div>
      </div>
    </div>
  </nav>
  </div>
  <div className='p-8'>
        <h1 className="font-black text-3xl text-center ">Historia de Proyecto</h1>       
    </div>
    <div class="container mx-auto mt-5 lg:w-auto text-center">
    <p>Nuestro Proyecto consiste en que utilizaremos Node.js y React para construir esta plataforma.</p>
    <p>Partiendo de que todos nosotros los involucrudos era algo nuevo para nosotros, pero con un poco de orden se pudo lograr todo.</p>
    <p>En el camino se encontraron muchas dificultades tante para hacer el Backend y Frontend, pero al final del dia se resolvio todo.</p>
    <p>Lo que nos queda es que aprendimos algo nuevo, y utilizar la metodologia XP aunque cansa se puede lograr lo propuesto.</p>
  
      </div>

      <Link to="/" ></Link>

      
    </div>
  )
}

export default Menu
