import React from "react";
import { Link } from "react-router-dom";
import Noticias from "./Noticias";
import "bootstrap/dist/css/bootstrap.min.css";

function Home(props) {
  return (
    <div>
      <h1>Homepage</h1>
      <Link to="/login">Login</Link>
      <br />
      <Link to="/forgot">Forgot Password</Link>
      <br />
      <Link to="/signup">Signup</Link>
      <br />
      <Link to="/carrito">Carrito</Link>
      <br />
      <Link to="/productos">Productos</Link>
      <br />
      <Link to="/recetas">Recetas</Link>
      <br />
     

        <Noticias noticias={props.noticias}/>
     
    </div>
  );
}

export default Home;
