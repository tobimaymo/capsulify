import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";

function ItemDetail({ item }) {
  const [selectedItem, setSelectedItem] = useState(0);
  const { addItem } = useContext(CartContext);

  const onAdd = (quantity) => {
    setSelectedItem(quantity);
    addItem(item, quantity);
  };
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
          {setSelectedItem > 0 ? (
            <Link
              to="/capsulify/cart"
              onClick={() => addItem(item, selectedItem)}
            >
              <button className="btn btn-dark">
                Agregar {setSelectedItem} al carrito
              </button>
            </Link>
          ) : (
            <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
          )}
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
