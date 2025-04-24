// App.jsx
import React, { useEffect, useState } from "react";
import { Button, AppBar, Toolbar, Typography, Container } from "@mui/material";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import SendIcon from '@mui/icons-material/Send';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Inicio from './views/Inicio';
import Productos from './views/Productos';
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("http://localhost:3000/api/hola")
      .then((res) => res.json())
      .then((data) => console.log("Respuesta del backend:", data));
  }, []);

  return (

    
    <>

    <Router>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            DeliMarket
          </Typography>
          <Button component={Link} to="/" color="inherit">Inicio</Button>
          <Button component={Link} to="/productos" color="inherit">Productos</Button>
          <Button color="inherit">Carrito</Button>
        </Toolbar>
      </AppBar>

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/productos" element={<Productos />} />
      </Routes>
    </Router>
    
      {/* Barra de navegación superior */}
      {/* <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            DeliMarket
          </Typography>
          <Button color="inherit">Inicio</Button>
          <Button color="inherit">Productos</Button>
          <Button color="inherit">Carrito</Button>
        </Toolbar>
      </AppBar> */}

      {/* Contenido principal */}
      <Container style={{ padding: "2rem" }}>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
          <a href="https://vite.dev" target="_blank" rel="noreferrer">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank" rel="noreferrer">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>

        <Typography variant="h4" gutterBottom>
          Vite + React + MUI
        </Typography>

        <Button variant="contained" endIcon={<SendIcon />} onClick={() => setCount(count + 1)}>
          count is {count}
        </Button>
{/* 
        <Typography variant="body1" sx={{ marginTop: "1rem" }}>
          Edita <code>src/App.jsx</code> y guarda para probar HMR.
        </Typography> */}
      </Container>
      
    </>
  );
}

export default App;



// import React, { useEffect } from 'react';
// import 'materialize-css/dist/css/materialize.min.css';
// import 'materialize-css/dist/js/materialize.min.js';
// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";

// function App() {
//   // Aquí va la llamada a tu API
//   useEffect(() => {
//     fetch("http://localhost:3000/api/hola")
//       .then((res) => res.json())
//       .then((data) => console.log("Respuesta del backend:", data));
//   }, []);

//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button className="btn waves-effect waves-light" onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//           <i className="material-icons right">send</i></button>
//           {/* <span class="material-icons-outlined">
//               send
//               </span>
//        </button>        */}
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>

//   );
// }

// export default App;
