import "./gallery.css"
import React, { useEffect, useState } from "react";
import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../../firebaseConfig";

function GalleryBTS() {
  const [items, setItems] = useState([]);
  let bts = items.filter(function (value) {
    return value.autor === "BTS";
  });
  useEffect(() => {
    const getImages = async () => {
      const q = query(collection(db, "imgs"));
      const docs = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setItems(docs);
    };
    getImages();
  }, []);
    return (
      <>
        <section className="gallery-bts">
          {bts.map((data) => <img src={data.img} alt={data.alt}/>)};
        </section>
      </>
    );
  }
  
  export default GalleryBTS;