import React from 'react'
import { Link } from 'react-router-dom'

function Adminis() {
  return (
    <div>

<div className='p-8'>
        <h1 className="font-black text-1xl text-center ">UNIVERSIDAD DE SAN PEDRO SULA</h1>
        <h2 className="font-black text-1xl text-center ">RESUMEN DE LA EVALUACION DOCENTE</h2>  
    </div>

<div className='md:w-auto lg:w-auto'>
  <div class="container mx-auto mt-8">
    <div class="max-w-screen-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
      <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      <div>
        <label class="block text-gray-700 font-bold">Año:</label>
          <input type="text" class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300" />
        </div>
        <div class="md:col-span-2 lg:col-span-1">
          <label class="block text-gray-700 font-bold">Número de cuenta:</label>
          <input type="text" class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300" />
        </div>
        <div class="md:col-span-2 lg:col-span-3">
          <label class="block text-gray-700 font-bold">Nombre del Docente:</label>
          <input type="text" class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300" />
        </div>
        <div class="md:col-span-2 lg:col-span-3">
          <label class="block text-gray-700 font-bold">Asignatura:</label>
          <input type="text" class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300" />
        </div>
        <div class="md:col-span-2 lg:col-span-3">
          <label class="block text-gray-700 font-bold">Carreras:</label>
          <input type="text" class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300" />
        </div>
      </div>

      <div class="max-w-3xl mx-auto mt-8">
        <table class="w-full border-4 border-indigo-500/100 mb-6">
          <thead>
            <tr>
              <th class="border px-3 py-2">Indicadores Administrativos</th>
              <th class="border px-3 py-2">Promedio Periodo 1</th>
              <th class="border px-3 py-2">Promedio Periodo 2</th>
              <th class="border px-3 py-2">Promedio Periodo 3</th>
              <th class="border px-3 py-2">Promedio Final</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border px-3 py-2">Entrega de documentacion</td>
           
            </tr>
            <tr>
              <td class="border px-3 py-2">Asistencia</td>
              
            </tr>
            <tr>
              <td class="border px-3 py-2">Actitud: Proactividad e Iniciativa </td>
              <td class="border px-3 py-2"><input type="text" class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300" /></td>
              <td class="border px-3 py-2"><input type="text" class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300" /></td>
              <td class="border px-3 py-2"><input type="text" class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300" /></td>
              <td class="border px-3 py-2"><input type="text" class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300" /></td>
            </tr>
            <tr>
              <td class="border px-3 py-2">Puntualidad</td>
            </tr>
          </tbody>
        </table>
      </div>
     

      <div class="container mx-auto p-2">
  
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
      type="button">
      Inicio
    </button>

   
    <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
      type="button">
      Enviar
    </button>

  
    <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      type="button">
      Salir
    </button>
  </div>



      
    </div>
  </div>
  </div>
  <Link to="/" ></Link>
    


      
    </div>
  )
}

export default Adminis
