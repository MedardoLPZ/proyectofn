import React from 'react'
import { Link } from 'react-router-dom'

function Dba() {
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
        <table class="w-full border-solid border-2 mb-6">
          <thead>
            <tr>
              <th class="border-solid border-2 px-3 py-2">Observación de la Clase 50%</th>
              <th class="border px-3 py-2">Promedio Visita 1</th>
              <th class="border px-3 py-2">Promedio Visita 2</th>
              <th class="border px-3 py-2">Promedio Final</th>
            </tr>
          </thead>
          <tbody>
            <tr className='text-center'>
              <td class="border px-3 py-2">Dimensiones</td>
              
            </tr>
            <tr>
              <td class="border px-3 py-2">Planificacion para el desarrollo de la clase</td>
              
            </tr>
            <tr>
              <td class="border px-3 py-2">Dominio Tecnico Metodologico</td> 
            </tr>
            <tr>
              <td class="border px-3 py-2">Dominio del contenido que imparte</td>
              <td class="border px-3 py-2"><input type="text" class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300" /></td>
              <td class="border px-3 py-2"><input type="text" class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300" /></td>
              <td class="border px-3 py-2"><input type="text" class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300" /></td>
            </tr>
            <tr>
              <td class="border px-3 py-2">Dominio de grupo y relaciones interpersonales</td>
            </tr>
            <tr>
              <td class="border px-3 py-2">Dominio del entorno virtual de aprendizaje</td>
            </tr>
          </tbody>
        </table>
      </div>

     
      
      <div class="max-w-3xl mx-auto mt-8">
        <table class="w-full border mb-6">
          <thead>
            <tr>
              <th class="border px-40 py-2">Evaluacion del Estudiante</th>
              <th class="border px-1 py-1">Promedio Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border px-3 py-2">Planificacion para el desarrollo de la clase</td>  
            </tr>
            <tr>
              <td class="border px-3 py-2">Dominio Tecnico Metodologico</td>   
            </tr>
            <tr>
              <td class="border px-3 py-2">Dominio del contenido que imparte</td>
              <td class="border px-3 py-2"><input type="text" class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300" /></td>
            </tr>
            <tr>
              <td class="border px-3 py-2">Dominio de grupo y relaciones interpersonales</td>
            </tr>
            <tr>
              <td class="border px-3 py-2">Dominio del entorno virtual de aprendizaje</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="max-w-3xl mx-auto mt-8">
        <table class="w-full border mb-6">
          <thead>
            <tr>
              <th class="border px-40 py-2">Calificacion Final</th>
              <td class="border px-3 py-2"><input type="text" class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300" /></td>
            </tr>
          </thead>
        </table>
      </div>
      
      <div class="max-w-3xl mx-auto mb-6">
        <label for="comments" class="block text-gray-700 font-bold">Comentarios:</label>
        <textarea id="comments" name="comments" rows="4" class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300" placeholder="Escribe tus comentarios aquí"></textarea>
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

export default Dba
