import React from 'react'
import { Link } from 'react-router-dom'

// function Productos(props) {
//     const show = props.productos.items.map(producto => (
//         <h1>{producto.title}</h1>
//     ))

//     return (
//         <div>
//             <h1>Productos</h1>
//             {show}
//         </div>
//     )
// }

function Productos(props) {
    const addProduct = (id) => {
        // props.setCarrito({
        // })
    } 
    const show = props.productos.items.map(producto => (
        <div>
            <img src={producto.img} alt={producto.name}/>
            <div>
                <h3>{producto.title}</h3>
                <p>{producto.description}</p>
            </div>
            <button onClick={addProduct(producto.id)}>Add</button>
        </div>
    ))
    return (
        <div>
            <div>
                <h1>Productos</h1>
                <Link
                    to="/newProduct"
                    >
                    New Product
                </Link>
            </div>
            {show}
            <Link to="/carrito">Checkout</Link>
        </div>
    )
}

export default Productos
