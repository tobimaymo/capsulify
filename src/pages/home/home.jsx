import "./home.css";
import React, { useEffect, useState } from "react";
import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import AlbumCarousel from "../../components/album-carousel/albumCarousel";
import "../../components/item-card/itemlist.css"
import Header from "../../components/HomeHeader/HomeHeader";

const Home = () => {
    const [showCarousel, setShowCarousel] = useState(true);

    useEffect(() => {
      function handleResize() {
        setShowCarousel(window.innerWidth > 768);
      }
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
    const [items, setItems] = useState([]);
    let bts = items.filter(function (value) {
      return value.autor === "BTS";
    })
    let ts = items.filter(function (value) {
      return value.autor === "Taylor Swift";
    })

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
    <>   
        {showCarousel &&<Header/>}
        <main>
        <p className='titulo-categoria-bts' style={{ paddingTop: '160px' }}>BTS <span className="categoria"> Albums</span></p>
        <div className="album-carousel-container">
            <AlbumCarousel albums={bts} /> 
        </div>
        <p className='titulo-categoria-ts'>Taylor Swift <span className="categoria"> Albums</span></p>
        <div className="album-carousel-container">
            <AlbumCarousel albums={ts} /> 
        </div>
        </main>
        

    </>
  );
}

export default Home;