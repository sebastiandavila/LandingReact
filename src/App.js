import React, { useState } from "react";

import "./App.css";
import Formulario from './Formulario';

function App() {
  const f=new Date();
  const dia=f.getDate();
  const mes=f.getMonth()+1;
  const año=f.getFullYear();
  const fecha=dia+"/"+mes+"/"+año;

  

  return (
    <div className="App">
     
      <Formulario/>
    </div>
  );
}

export default App;
