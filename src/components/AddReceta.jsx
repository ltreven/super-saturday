import React, {useState} from 'react'


const AddReceta = props => {

    const allRecipes = [...props.recetas.items]
    const initialState = {
        id: String(allRecipes.length),
        title: '',
        description: '',
        img: ''
    }

    const [recipe, setRecipe] = useState(initialState)



    const handleChange = ({target}) => {
        setRecipe({
            ...recipe,
            [target.name]: target.value
        })    
    }

    const handleSubmit = event => {
        event.prevendDefault()
        props.setRecetas(recipe)
        setRecipe({
            title: '',
            description: '',
            img: ''
        })
    }

    return (
        <div>
           <form onSubmit={handleSubmit}>
               <label htmlFor="">Title</label>
               <input type="text" name="title" onChange={handleChange} value={recipe.title}/>
               <label htmlFor="">Description</label>
               <input type="text" name="description" onChange={handleChange} value={recipe.description}/>
               <label htmlFor="">Picture URL</label>
               <input type="text" name="img" onChange={handleChange} value={recipe.img}/>
               <button type="submit">SAVE</button>
            </form> 
        </div>
    )
}

export default AddReceta
