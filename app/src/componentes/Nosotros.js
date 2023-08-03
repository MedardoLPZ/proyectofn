import React from 'react'
import joel from '../image/joel.jpeg'
import fran from '../image/fran.jpeg'
import sheryl from '../image/sheryl.jpeg'
import jose from '../image/jose.jpeg'
import osman from '../image/osman.jpeg'


function Nosotros() {
  return (
    <div>



<body class="bg-gray-100">

<div class="container mx-auto p-8">
  <h1 class="text-2xl font-bold mb-4">Nosotros</h1>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div class="bg-white p-4 rounded-md shadow-md flex flex-col items-center">
      <h2 class="text-lg font-semibold mb-2">Osman Eduardo Velasquez Cruz</h2>
      <h2>Lider del grupo</h2>
      <p>Encargado de supervisar los avances de los partes de frontedn y backend</p>
      <img src={osman} alt="Imagen 1" class="w-96 h-2/3 object-contain mb-4"/>  
    </div>
 
    <div class="bg-white p-4 rounded-md shadow-md flex flex-col items-center">
      <h2 class="text-lg font-semibold mb-2">Jose Medardo Lopez</h2>
      <img src={jose} alt="Imagen 2" class="w-96 h-2/3 object-contain mb-4"/>  
    </div>
    <div class="bg-white p-4 rounded-md shadow-md flex flex-col items-center">
      <h2 class="text-lg font-semibold mb-2">Jose Francisco</h2>
      <img src={fran} alt="Imagen 2" class="w-96 h-2/3 object-contain mb-4"/>  
    </div>
    <div class="bg-white p-4 rounded-md shadow-md flex flex-col items-center">
      <h2 class="text-lg font-semibold mb-2">Sheryl Saravia</h2>
      <img src={sheryl} alt="Imagen 2" class="w-96 h-2/3 object-contain mb-4"/>  
    </div>
    <div class="bg-white p-4 rounded-md shadow-md flex flex-col items-center">
      <h2 class="text-lg font-semibold mb-2">Joel Edgardo Ramirez</h2>
      <img src={joel} alt="Imagen 2" class="w-96 h-2/3 object-contain mb-4"/>  
    </div>
  </div>
</div>

</body>






      


      
    </div>
  )
}

export default Nosotros
