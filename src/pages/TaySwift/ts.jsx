import GalleryTS from "../../components/img-galery/galleryTS";
import "./ts.css";
import React, { useEffect, useState } from "react";
import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import "../../components/item-card/itemlist.css"
import ItemList from "../../components/item-card/itemlist";

const TaylorSwiftPage = () => {
    const [items, setItems] = useState([]);
    let ts = items.filter(function (value) {
      return value.autor === "Taylor Swift";
    });
    const albumOrdenado = ts.sort((a, b) => b.año - a.año);
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
    <div className="gallery-container">
        <div className="logo-artista-ts">
            <img src={process.env.PUBLIC_URL + "/img/tslogo.svg"} alt="bts-logo" width="438px" height="200" />
        </div>
      <GalleryTS />
    </div>
    <main>
      <div>
        <div className="album-grid">
          <ItemList productos={albumOrdenado} />
        </div>
      </div>
    </main>
  </div>
  );
}

export default TaylorSwiftPage;