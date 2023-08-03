import React, {useCallback, useEffect} from 'react' 
import axios from 'axios'
import { Link } from 'react-router-dom'

function Login() {
  //const loginn = useCallback (async()=>{
   // const respo= await axios ("http://localhost:7000/v1/users")
    //console.log(respo)

  //}) 
  //useEffect (()=>{
    //loginn()

  //},[loginn])

  return (
    <div>

<body class="bg-gray-100">
  <div class="flex justify-center items-center h-screen">
    <div class="bg-white p-8 shadow-md rounded-md w-96">
      <h2 class="text-2xl font-bold mb-6">Login</h2>
      <form>
        <div class="mb-4">
          <label for="email" class="block text-gray-700 font-bold mb-2">Email</label>
          <input type="email" id="email" name="email" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your email"/>
        </div>
        <div class="mb-4">
          <label for="password" class="block text-gray-700 font-bold mb-2">Password</label>
          <input type="password" id="password" name="password" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your password"/>
        </div>
        <Link to="/" className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500" >Login</Link>

      </form>
    </div>
  </div>
</body>


      
    </div>
  )
}

export default Login
