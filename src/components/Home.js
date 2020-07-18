import React from 'react'
import { Link } from 'react-router-dom'

function Home(props) {

    console.log("Natalia, aqui están los datos de tu carousel: ", props.carouselData)

    const scrollableAds = [...props.ads.items].map(ad => {
        console.log(ad.img)
        return (
            <li key={ad.id} >
                <a href={ad.link}><img src={ad.img}/></a>
            </li>
        )
    })

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
            <div className="adsContainer">
                {scrollableAds}
            </div>
        </div>
    )
}

export default Home
