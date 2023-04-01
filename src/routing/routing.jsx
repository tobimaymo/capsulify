import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/home/home";
import Navbar from "../components/navbar/navbar"
import FooterBar from "../components/footer/footer";
import BTSpage from "../pages/BTS/bts";
import TaylorSwiftPage from "../pages/TaySwift/ts";
import NotFound from "../pages/NotFound";
import ItemDetailContainer from "../components/item-detail/itemdetail-container";

const Routing = () => {
  return (
    <>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path={"/capsulify/"} element={<Home />} />
            <Route path={"/capsulify/artist/BTS"} element={<BTSpage />} />
            <Route path={"/capsulify/artist/Taylor Swift"} element={<TaylorSwiftPage />} />
            <Route path={"/capsulify/album/:id"} element={<ItemDetailContainer />}/>
            <Route path="*" element={<NotFound/>} />
          </Routes>
          <FooterBar/>
        </div>
      </Router>
    </>
  );
};

export default Routing;