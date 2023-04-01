import { Link } from "react-router-dom";
import "./itemdetail.css";

function ItemDetail({ item }) {
  return (
    <div className={`${item.alt} padding-bg`}>
      <div className="CardDetail sombreadogeneral">
        <div className="sombreadogeneral">
          <img
            src={item.img}
            alt={item.alt}
            className="bd-placeholder-img card-img-top"
          />
        </div>
        <div className="infoAlbum copperplate">
          <small>{item.autor} presents</small>
          <p className="tituloDetail">{item.titulo}</p>
          <p className="descDetail">{item.descripcion}</p>
          <div>
            <p className="descDetail">{item.tracklist}</p>
          </div>
          <p className="precioDetail">${item.precio}</p>
            <Link
              to="/capsulify/cart">
              <button className="btn btn-dark">
                Agregar al carrito
              </button>
            </Link>
        </div>
      </div>
      <p className="tituloDetail"> TRACKLIST </p>
      <div className="gridTracklist">
        <p className="tituloTrack">{item.track1}</p>
        <p className="tituloTrack">{item.track2}</p>
        <p className="tituloTrack">{item.track3}</p>
        <p className="tituloTrack">{item.track4}</p>
        <p className="tituloTrack">{item.track5}</p>
        <p className="tituloTrack">{item.track6}</p>
        <p className="tituloTrack">{item.track7}</p>
        <p className="tituloTrack">{item.track8}</p>
        <p className="tituloTrack">{item.track9}</p>
        <p className="tituloTrack">{item.track10}</p>
        <p className="tituloTrack">{item.track11}</p>
        <p className="tituloTrack">{item.track12}</p>
        <p className="tituloTrack">{item.track13}</p>
        <p className="tituloTrack">{item.track14}</p>
        <p className="tituloTrack">{item.track15}</p>
        <p className="tituloTrack">{item.track16}</p>
        <p className="tituloTrack">{item.track17}</p>
        <p className="tituloTrack">{item.track18}</p>
        <p className="tituloTrack">{item.track19}</p>
        <p className="tituloTrack">{item.track20}</p>
      </div>
    </div>
  );
}

export default ItemDetail;
