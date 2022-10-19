import React from 'react'
import { Link } from 'react-router-dom'
import "../Cart/Cart.css"

const ItemsCarousel = ({dats}) => {
  return (
<div className='py-5 cartText bg-light'>
        {dats.filter((item, idx) => idx < 1).map((prop) => (
            <>
            <p className='text-carousel'>Albums de {prop.autor}</p>
            </>
        ))}
        <div className='contenedor-list sombraCarousel bgColorCarousel'>
            {dats.filter((item, idx) => idx < 4).map((prod) => (
            <>
            <div>
                <Link to={`/capsulify/album/detail/${prod.id}`} className="linkalbum">
                    <img src={prod.img} className="CarouselImg" alt={prod.alt}/>
                </Link>        
                <p>{prod.titulo}</p>
            </div>
            </>
            ))}
        </div>
</div>
  )
}

export default ItemsCarousel