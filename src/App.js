import React, { useState } from 'react'
import './App.css'
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import Recetas from './components/Recetas'
import Productos from './components/Productos'

import Login from './components/Login'
import Signup from './components/Signup'
import Forgot from './components/Forgot'
import Carrito from './components/Carrito'
import PostsList from './components/PostsList'
import AddPostForm from './components/AddPostForm'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {

  const carousel = {
    items: [{
      id: "1",
      img: "http://img1",
      link: "http://www.google.com"
    },
    {
      id: "2",
      img: "http://img2",
      link: "http://www.google.com"
    }]
  }

  const ads = {
    items: [{
      id: "1",
      img: "http://img1",
      link: "http://www.google.com"
    },
    {
      id: "2",
      img: "http://img2",
      link: "http://www.google.com"
    }]
  }

  const noticias = {
    items: [{
      id: "1",
      img: "http://img1",
      title: "titulo de la noticia",
      description: "descripcion de la noticia"
    },
    {
      id: "2",
      img: "http://img2",
      title: "titulo de la noticia",
      description: "descripcion de la noticia"
    }]
  }

  const postsInitial = {
    items: [{
      id: "1",
      title: "titulo del post",
      description: "descripcion del post"
    },
    {
      id: "2",
      title: "titulo del post",
      description: "descripcion del post"
    }]
  }

  const [posts, setPosts] = useState(postsInitial)

  const recetasInitial = {
    items: [{
      id: "1",
      img: "http://imgdelareceta",
      title: "titulo de la receta 1",
      description: "descripcion de la receta"
    },
    {
      id: "2",
      img: "http://imgdelareceta",
      title: "titulo de la receta 2",
      description: "descripcion de la receta"
    }]
  }

  const [recetas, setRecetas] = useState(recetasInitial)

  const comentariosRecetasInitial = {
    items: [{
      id: "1",
      idReceta: "1",
      title: "titulo ddel comentario",
      description: "descripcion del comentario"
    },
    {
      id: "2",
      idReceta: "1",
      title: "titulo ddel comentario",
      description: "descripcion del comentario"
    }]
  }

  const [comentariosRecetas, setComentariosRecetas] = useState(comentariosRecetasInitial)


  const productosInitial = {
    items: [{
      id: "1",
      img: "http://imgdelproducto",
      title: "nombre del producto 1",
      description: "descripcion del producto",
      precio: 10
    },
    {
      id: "2",
      img: "http://imgdelproducto",
      title: "nombre del producto 2",
      description: "descripcion del producto",
      precio: 10
    }]
  }

  const [productos, setProductos] = useState(productosInitial)


  const carritoInitial = {
    items: [{
      productId: "1",
      quantity: 2
    },
    {
      productId: "2",
      quantity: 1
    }]
  }

  const [carrito, setCarrito] = useState(carritoInitial)

  const userInitial = {
    loggedIn: false,
    username: '',
    email: ''
  }

  const [user, setUser] = useState(userInitial)

  return (
    <div>
      <h1>Navbar aqui</h1>
      <Switch>

        <Route exact path="/">
          <Home carouselData={carousel} ads={ads} />
          <PostsList posts={posts} user={user.username} />
        </Route>

        <Route exact path="/recetas">
          <Recetas recetas={recetas} setRecetas={setRecetas} comentarios={comentariosRecetas} setComentarios={setComentariosRecetas} />
        </Route>
        <Route exact path="/productos">
          <Productos productos={productos} setProductos={setProductos} setCarrito={setCarrito} />
        </Route>
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/forgot" component={Forgot} />
        <Route exact path="/carrito" component={Carrito} />
        <Route exact path="/posts/add" component={AddPostForm} />
      </Switch>
    </div>
  );
}

export default App;
