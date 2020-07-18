import React, { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './components/Home'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

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
      img: "https://images.unsplash.com/photo-1551818905-29c07d4802d0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1728&q=80",
      alt: "Sección de recetas",
      title: "Nuestras recetas",
      subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      cta: "Ver recetas",
      link: "/recetas"
    },
    {
      id: "2",
      img: "https://images.unsplash.com/photo-1526470498-9ae73c665de8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1204&q=80",
      alt: "Sección de productos",
      title: "Nuestros productos",
      subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      cta: "Ver productos",
      link: "/productos"
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
      <NavBar />
      <Switch>

        <Route exact path="/">
          <Home carouselData={carousel} ads={ads} />
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
      <Footer/>
    </div>
  );
}

export default App;
