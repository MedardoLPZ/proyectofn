import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';

import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Login from './componentes/Login';
import Menu from './componentes/Menu';
import Dba from './componentes/Dba';
import Director from './componentes/Director';
import Nosotros from './componentes/Nosotros';
import Nuevousuario from './componentes/Nuevousuario';
import Adminis from './componentes/Adminis';
import Oferta from './componentes/Oferta';


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Link to="login"><Login/></Link>
      </div>
    ),
  },
  {
    path: "menu",
    element: <Menu/>,
  },
  {
    path: "dba",
    element: <Dba/>,
  },
  {
    path: "oferta",
    element: <Oferta/>,
  },
  {
    path: "adminis",
    element: <Adminis/>,
  },
  {
    path: "nosotros",
    element: <Nosotros/>,
  },
  {
    path: "nuevousuario",
    element: <Nuevousuario/>,
  },
  {
    path: "oferta",
    element: <Oferta/>,
  },
  {
    path: "director",
    element: <Director/>,
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
