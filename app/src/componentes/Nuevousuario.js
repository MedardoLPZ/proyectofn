import React from 'react'

function Nuevousuario() {
  return (
    <div>

<body class="bg-gray-100">

<div class="container mx-auto p-8">
  

  <div class="max-w-md mx-auto mt-4 bg-white p-8 rounded-md shadow-md">
    <h2 class="text-2xl font-bold mb-4">Crear Nuevo Usuario</h2>
    <form>
    <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="Nuevo">
          Email:
        </label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="nuevo" type="usuario" placeholder="Ingrese su Nombre"/>
      </div>
        
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="new-email">
          Email:
        </label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="new-email" type="email" placeholder="Ingrese un email"/>
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="Contraseña">
          Contraseña:
        </label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="contra" type="contraseña" placeholder="Ingrese una contraseña"/>
      </div>
      <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
        type="submit">
        Crear Cuenta
      </button>
    </form>
  </div>
</div>

</body>
      
    </div>
  )
}

export default Nuevousuario
