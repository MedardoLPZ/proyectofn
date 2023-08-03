import React from 'react'

function Oferta() {
  return (
    <div>

<body class="bg-gray-100">
  <div class="container mx-auto mt-8 p-8 bg-white rounded-lg shadow-lg max-w-md">
    <h2 class="text-2xl font-bold mb-6">Oferta Académica</h2>
    <form>
      <div class="mb-4">
        <label for="nombre" class="block text-gray-700 font-bold mb-2">Codigo:</label>
        <input type="text" id="nombre" name="nombre" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500" placeholder="Nombre completo" required/>
      </div>
      <div class="mb-4">
        <label for="email" class="block text-gray-700 font-bold mb-2">Asignatura:</label>
        <select id="programa" name="programa" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500" required>
          <option value="">Seleccione una clase</option>
          <option value="Videoconferencias">Videoconferencia</option>
          <option value="Conferencias">Conferencia</option>
        </select>
      </div>
      <div class="mb-4">
        <label for="programa" class="block text-gray-700 font-bold mb-2">Grupo:</label>
        <select id="programa" name="programa" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500" required>
          <option value="">Seleccione un Grupo</option>
          <option value="ingenieria">Ingeniería</option>
          <option value="medicina">Medicina</option>
          <option value="arte">Arte y Diseño</option>
        </select>
      </div>
      <div class="mb-4">
        <label for="nombre" class="block text-gray-700 font-bold mb-2">Seccion:</label>
        <input type="text" id="nombre" name="nombre" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500" placeholder="Nombre Seccion" required/>
      </div>
      <div class="mb-4">
        <label for="nombre" class="block text-gray-700 font-bold mb-2">Unidades Valorativas:</label>
        <input type="text" id="nombre" name="nombre" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500" placeholder="Colocar Unidades" required/>
      </div>
      <div class="mb-4">
        <label for="nombre" class="block text-gray-700 font-bold mb-2">Unidades Valorativas :</label>
        <input type="text" id="nombre" name="nombre" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500" placeholder="Nombre Seccion" required/>
      </div>
      <div class="mb-4">
        <label for="nombre" class="block text-gray-700 font-bold mb-2">Nombre:</label>
        <input type="text" id="nombre" name="nombre" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500" placeholder="Nombre" required/>
      </div>
      <div class="mb-4">
        <label for="nombre" class="block text-gray-700 font-bold mb-2">Cuenta:</label>
        <input type="text" id="nombre" name="nombre" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500" placeholder="Numero de Cuenta" required/>
      </div>
      <div class="mb-4">
        <label for="email" class="block text-gray-700 font-bold mb-2">Estado:</label>
        <select id="programa" name="programa" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500" required>
          <option value="">Seleccione una clase</option>
          <option value="Activo">Activo</option>
          <option value="Desactivado">Desactivado</option>
        </select>
      </div>
      <div class="mb-4">
        <label for="nombre" class="block text-gray-700 font-bold mb-2">Aula:</label>
        <input type="text" id="nombre" name="nombre" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500" placeholder="Nombre Aula" required/>
      </div>
      <div class="mb-4">
        <label for="nombre" class="block text-gray-700 font-bold mb-2">Inicio:</label>
        <input type="text" id="nombre" name="nombre" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500" placeholder="Horario" required/>
      </div>
      <div class="mb-4">
        <label for="nombre" class="block text-gray-700 font-bold mb-2">Fin:</label>
        <input type="text" id="nombre" name="nombre" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500" placeholder="Horario" required/>
      </div>
      <div class="mb-4">
        <label for="nombre" class="block text-gray-700 font-bold mb-2">Dias:</label>
        <input type="text" id="nombre" name="nombre" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500" placeholder="Dias de clase" required/>
      </div>
        <div class="mb-4">
        <label for="nombre" class="block text-gray-700 font-bold mb-2">Inicio:</label>
        <input type="text" id="nombre" name="nombre" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500" placeholder="Horario" required/>
      </div>
      <div class="mb-4">
        <label for="email" class="block text-gray-700 font-bold mb-2">Jornada:</label>
        <select id="programa" name="programa" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500" required>
          <option value="">Seleccione una clase</option>
          <option value="noche">Noche</option>
          <option value="dmv">DMV</option>
          <option value="tarde">Tarde</option>
          <option value="mañana">Mañana</option>
        </select>
      </div>
      <div class="mb-4">
        <label for="nombre" class="block text-gray-700 font-bold mb-2">Capacidad:</label>
        <input type="text" id="nombre" name="nombre" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500" placeholder="Colocar Capacidad" required/>
      </div>
      <div class="mb-4">
        <label for="nombre" class="block text-gray-700 font-bold mb-2">Cupo:</label>
        <input type="text" id="nombre" name="nombre" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500" placeholder="Colocar Cupo" required/>
      </div>
      <div class="mb-4">
        <label for="nombre" class="block text-gray-700 font-bold mb-2">Matricula:</label>
        <input type="text" id="nombre" name="nombre" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500" placeholder="Cantidad de Matriculados" required/>
      </div>
      <div class="mb-4">
        <label for="nombre" class="block text-gray-700 font-bold mb-2">Pre-Matricula:</label>
        <input type="text" id="nombre" name="nombre" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500" placeholder="Cantidad de Pre-Matriculados" required/>
      </div>
      <div class="mb-4">
        <label for="nombre" class="block text-gray-700 font-bold mb-2">Acepta LE:</label>
        <input type="text" id="nombre" name="nombre" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500" placeholder="Lista de Esperas " required/>
      </div>
      <div class="mb-4">
        <label for="nombre" class="block text-gray-700 font-bold mb-2">Lista de Espera:</label>
        <input type="text" id="nombre" name="nombre" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500" placeholder="Cantidad de Esperas" required/>
      </div>
      
     
      <button type="submit" class="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Enviar</button>
    </form>
  </div>
</body>

    </div>
  )
}

export default Oferta
