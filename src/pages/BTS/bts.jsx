import GalleryBTS from "../../components/img-galery/galleryBTS";
import "./bts.css";
import React, { useEffect, useState } from "react";
import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import "../../components/item-card/itemlist.css"
import ItemList from "../../components/item-card/itemlist";

const BTSpage = () => {
    const [items, setItems] = useState([]);
    let bts = items.filter(function (value) {
      return value.autor === "BTS";
    });
    const albumOrdenado = bts.sort((a, b) => b.año - a.año);
    useEffect(() => {
      const getAlbums = async () => {
        const q = query(collection(db, "album"));
        const docs = [];
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          docs.push({ ...doc.data(), id: doc.id });
        });
        setItems(docs);
      };
      getAlbums();
    }, []);
  return (
    <div className="bts-page-config">
      <GalleryBTS/>
        <main>
        <div className="logo-artista">
          <img src={process.env.PUBLIC_URL + "/img/bts-logo.png"} alt="bts-logo" width="600px" height="438"/>
        </div>
        <p className='titulo-categoria-bts'>BTS <span className="categoria"> Albums</span></p>
        <p className='titulo-categoria'>BTS <span className="categoria"> Albums</span></p>
        <div className="album-grid">
          <ItemList productos={albumOrdenado} />
        </div>
        </main>
        

    </div>
  );
}

export default BTSpage;