import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Noticias(props) {
  const show = props.noticias.items.map((noticia) => (
    <div className="card-body d-flex flex-row">
      <div className="card promoting-card">
        <div className="view overlay">
          <img
            className="card-img-left rounded-0"
            src={noticia.img}
            alt={noticia.title}
          />
        </div>
        <div className="card-title">
          <h4 className="font-weight-bold mb-2"><i className="far fa-clock pr-2"> 18-07-2020</i> {noticia.title}</h4>
        </div>

        <div className="collapse-content">
          <p className="card-text collapse" id="collapseContent">
            {noticia.description}
          </p>
          <a
            className="btn btn-flat red-text p-1 my-1 mr-0 mml-1 collapsed"
            data-toggle="collapse"
            href="#collapseContent"
            aria-expanded="false"
            aria-controls="collapseContent"
          >Leer Mas</a>
          <i
            className="fas fa-share-alt text-muted float-right p-1 my-1"
            data-toggle="tooltip"
            data-placement="top"
            title="Share this post"
          ></i>
          <i
            className="fas fa-heart text-muted float-right p-1 my-1 mr-3"
            data-toggle="tooltip"
            data-placement="top"
            title="I like it"
          ></i>
        </div>
      </div>
    </div>
  ));

  return (
    <div>
      <h1>Noticias</h1>
      {show}
    </div>
  );
}

export default Noticias;
