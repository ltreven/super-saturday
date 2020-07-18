import React from 'react'

function Productos(props) {
    const show = props.productos.items.map(producto => (
        <h1>{producto.title}</h1>
    ))

    return (
        <div>
            <h1>Productos</h1>
            {show}
        </div>
    )
}

export default Productos
