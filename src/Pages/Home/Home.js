import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import React, { useEffect, useState } from "react";
import "./Home.css";
import ItemsCarousel from "./ItemsCarousel";
import { Link } from "react-router-dom";
import HomeHeader from "./HomeHeader";

function Home() {
  const [items, setItems] = useState([]);
  let bts = items.filter(function (value) {
    return value.autor === "BTS";
  });
  let ts = items.filter(function (value) {
    return value.autor === "Taylor Swift";
  });
  let otros = items.filter(function (value) {
    return value.autor === "Otros";
  });

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
      <HomeHeader />
      <div className="gridCarousel album bg-light" id="divMain">
        <div>
          <ItemsCarousel dats={bts}/>
          <Link to={`/capsulify/album/Otros`} className="button-75">
            Mas
          </Link>
        </div>
        <div>
          <ItemsCarousel dats={ts}/>
          <Link to={`/capsulify/album/Otros`} className="button-75">
            Mas
          </Link>
        </div>
        <div>
          <ItemsCarousel dats={otros}/>
          <Link to={`/capsulify/album/Otros`} className="button-75">
            Mas
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
