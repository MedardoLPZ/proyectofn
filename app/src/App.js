import './App.css';
import Director from './componentes/Director';
import Login from './componentes/Login';
import Menu from './componentes/Menu';
import Oferta from './componentes/Oferta';
import Nosotros from './componentes/Nosotros';
import Nuevousuario from './componentes/Nuevousuario';
import Dba from './componentes/Dba';
import Adminis from './componentes/Adminis';
import { useEffect, useState } from 'react';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
     <Router>
      <Switch>

        <Route path='/login'><Login/></Route>
        <Route path='/'><Menu/></Route>

      </Switch>
     </Router>
    </div>
  );
}

export default App;
