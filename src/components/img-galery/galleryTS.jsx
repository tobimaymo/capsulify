import "./gallery.css"
import React, { useEffect, useState } from "react";
import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../../firebaseConfig";

function GalleryTS() {
  const [items, setItems] = useState([]);
  let ts = items.filter(function (value) {
    return value.autor === "Taylor Swift";
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
        <section className="gallery-ts">
          {ts.map((data) => <img src={data.img} alt={data.alt}/>)};
        </section>
      </>
    );
  }
  
  export default GalleryTS;