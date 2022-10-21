import React, { useEffect, useState } from "react";
import { collection, query, getDocs, where } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { useParams } from "react-router-dom";
import ItemList from "../../Components/ItemCard/ItemList";

const AutorPage = () => {
  const [albumData, setAlbumData] = useState([]);
  const { autor } = useParams();

  useEffect(() => {
    const getAlbums = async () => {
      const q = query(collection(db, "album"), where("autor", "==", autor));
      const docs = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setAlbumData(docs);
    };
    getAlbums();
  }, [autor]);
  return (
    <div>
      <div className="album py-5 bg-light" id="divMain">
        <div id="contenedor-productos">
          <ItemList productos={albumData} />
        </div>
      </div>
    </div>
  );
};

export default AutorPage;
