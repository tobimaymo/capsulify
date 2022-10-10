import React from 'react'
import { Link } from 'react-router-dom';

const Categories = () => {
  return (
    <>
      <div className="listasidebar">
      <Link to={'/capsulify/'} className="links"><p>Home</p></Link>
      </div>
      <div className="listasidebar">
      <Link to={'/capsulify/album'} className="links"><p>All Products</p></Link>
      </div>
      <div className="listasidebar">
      <Link to={'/capsulify/album/Taylor Swift'} className="links"><p>Taylor Swift</p></Link>
      </div>
      <div className="listasidebar">
      <Link to={'/capsulify/album/BTS'} className="links"><p>BTS</p></Link>
      </div>
      <div className="listasidebar">
      <Link to={'/capsulify/album/Otros'} className="links"><p>Others</p></Link>
      </div>
    </>
  )
}

export default Categories