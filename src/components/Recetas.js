import React from 'react'

function Recetas(props) {
    const show = props.recetas.items.map(receta => (
        <h1>{receta.title}</h1>
    ))
    return (
        <div>
            <h1>Recetas</h1>
            {show}
        </div>
    )
}

export default Recetas
