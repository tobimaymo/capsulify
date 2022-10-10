import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FooterBar from '../Components/Footer/FooterBar';
import ItemDetailContainer from '../Components/ItemDetail/ItemDetailContainer';
import NavBar from '../Components/NavBar/NavBar';
import AllProducts from '../Pages/AllProducts/AllProducts';
import AutorPage from '../Pages/AutorPage/AutorPage';
import Cart from '../Pages/Cart/Cart';
import Home from '../Pages/Home/Home';
import NotFound from '../Pages/NotFound';

const Routing = () => {
  return (
    <>
        <Router>
            <div className="App">
            <NavBar />
                <Routes>
                <Route path={'/capsulify/'} element={<Home/>}/>
                <Route path={'/capsulify/album'} element={<AllProducts/>}/>
                <Route path={'/capsulify/album/:autor'} element={<AutorPage/>}/>
                <Route path={'/capsulify/album/detail/:id'} element={<ItemDetailContainer/>}/>
                <Route path={'/capsulify/cart'} element={<Cart/>}/>
                <Route path='*' element={<NotFound/>} />
                </Routes>
            <FooterBar/>
            </div>
        </Router>
    </>
  )
}

export default Routing