import React from 'react'
import Comentarios from './Comentarios'

function Recetas(props) {
    const show = props.recetas.items.map(receta => (
        <h1>{receta.title}</h1>
    ))

    return (
        <div>
            <h1>Recetas</h1>
            {show}
            <Comentarios todosComments={props.comentarios}/>
        </div>
    )
}

export default Recetas
