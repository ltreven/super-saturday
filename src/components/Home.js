import React from 'react'
import { Link } from 'react-router-dom'
import HomeCarousel from './HomeCarousel'

function Home(props) {

    console.log("Natalia, aqui están los datos de tu carousel: ", props.carouselData)

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

            <HomeCarousel carouselData={props.carouselData}/>
        </div>
    )
}

export default Home
