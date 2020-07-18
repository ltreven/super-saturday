import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Recetas from "./components/Recetas";
import Productos from "./components/Productos";

import Login from "./components/Login";
import Signup from "./components/Signup";
import Forgot from "./components/Forgot";
import Carrito from "./components/Carrito";

function App() {
  const carousel = {
    items: [
      {
        id: "1",
        img: "http://img1",
        link: "http://www.google.com",
      },
      {
        id: "2",
        img: "http://img2",
        link: "http://www.google.com",
      },
    ],
  };

  const ads = {
    items: [
      {
        id: "1",
        img: "http://img1",
        link: "http://www.google.com",
      },
      {
        id: "2",
        img: "http://img2",
        link: "http://www.google.com",
      },
    ],
  };

  const noticias = {
    items: [
      {
        id: "1",
        img:
          "https://www.lavanguardia.com/r/GODO/LV/p7/WebSite/2020/07/18/Recortada/20200717-637305883725291135_20200717131506-kw6G-WBFI8V8ALDVBVHL8-992x558@LaVanguardia-Web.jpg",
        title:
          "El Govern responsabiliza a cada ciudadano de que no haya contagios",
        description:
          "Trece ciudades del área metropolitana de Barcelona, 2,6 millones de personas, así como los habitantes de la Noguera y todo el Segrià, han sido impelidos a quedarse en casa todo lo que sea posible durante estos próximos quince días. “No salgan ni se vayan de fin de semana”, recomendaron los tres consellers, Alba Vergés, Meritxell Budó y Miquel Buch, que anunciaron las nuevas medidas de restricción. No participó como se creía la alcaldesa de Barcelona, Ada Colau.",
      },
      {
        id: "2",
        img:
          "https://www.lavanguardia.com/r/GODO/LV/p7/WebSite/2020/07/18/Recortada/img_aservian_20200714-125517_imagenes_lv_terceros_foto_3674677-kvjH-W2B9AA9WD0D9G5GJ-992x558@LaVanguardia-Web.JPG",
        title:
          "El 50% de los españoles no se irá de vacaciones por el virus o la economía",
        description:
          "Está claro que estamos ante un verano diferente. Así de tajante se manifestó ayer Rosario Pedrosa, responsable del área de estrategia comercial y marketing de Aecoc, la asociación de empresas de gran consumo, durante la presentación del estudio anual que realiza para analizar las tendencias de gasto de las familias en esta temporada del año.",
      },
    ],
  };

  const postsInitial = {
    items: [
      {
        id: "1",
        title: "titulo del post",
        description: "descripcion del post",
      },
      {
        id: "2",
        title: "titulo del post",
        description: "descripcion del post",
      },
    ],
  };

  const [posts, setPosts] = useState(postsInitial);

  const recetasInitial = {
    items: [
      {
        id: "1",
        img: "http://imgdelareceta",
        title: "titulo de la receta 1",
        description: "descripcion de la receta",
      },
      {
        id: "2",
        img: "http://imgdelareceta",
        title: "titulo de la receta 2",
        description: "descripcion de la receta",
      },
    ],
  };

  const [recetas, setRecetas] = useState(recetasInitial);

  const comentariosRecetasInitial = {
    items: [
      {
        id: "1",
        idReceta: "1",
        title: "titulo ddel comentario",
        description: "descripcion del comentario",
      },
      {
        id: "2",
        idReceta: "1",
        title: "titulo ddel comentario",
        description: "descripcion del comentario",
      },
    ],
  };

  const [comentariosRecetas, setComentariosRecetas] = useState(
    comentariosRecetasInitial
  );

  const productosInitial = {
    items: [
      {
        id: "1",
        img: "http://imgdelproducto",
        title: "nombre del producto 1",
        description: "descripcion del producto",
        precio: 10,
      },
      {
        id: "2",
        img: "http://imgdelproducto",
        title: "nombre del producto 2",
        description: "descripcion del producto",
        precio: 10,
      },
    ],
  };

  const [productos, setProductos] = useState(productosInitial);

  const carritoInitial = {
    items: [
      {
        productId: "1",
        quantity: 2,
      },
      {
        productId: "2",
        quantity: 1,
      },
    ],
  };

  const [carrito, setCarrito] = useState(carritoInitial);

  const userInitial = {
    loggedIn: false,
    username: "",
    email: "",
  };

  const [user, setUser] = useState(userInitial);

  return (
    <div>
      <h1>Navbar aqui</h1>
      <Switch>
        <Route exact path="/">
          <Home carouselData={carousel} ads={ads} noticias={noticias}/>
          
        </Route>
        <Route exact path="/recetas">
          <Recetas
            recetas={recetas}
            setRecetas={setRecetas}
            comentarios={comentariosRecetas}
            setComentarios={setComentariosRecetas}
          />
        </Route>
        <Route exact path="/productos">
          <Productos
            productos={productos}
            setProductos={setProductos}
            setCarrito={setCarrito}
          />
        </Route>

        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/forgot" component={Forgot} />
        <Route exact path="/carrito" component={Carrito} />
      </Switch>
    </div>
  );
}

export default App;
