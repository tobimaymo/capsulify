import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './albumCarousel.css';
import { Link } from 'react-router-dom';

const AlbumCarousel = ({ albums }) => {
  const sliderRef = useRef();
  const settings = {
    dots: false,
    infinite: false,
    draggable: false,
    arrows: false,
    speed: 400,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          draggable: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          draggable: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  const albumOrdenado = albums.sort((a, b) => b.año - a.año);

  const [descriptions, setDescriptions] = useState(albumOrdenado.map(() => false));

  const [timer, setTimer] = useState(null);

  const showDescription = (index) => {
    if (timer) {
      clearTimeout(timer);
    }

    const newTimer = setTimeout(() => {
      const newDescriptions = [...descriptions];
      newDescriptions[index] = true;
      setDescriptions(newDescriptions);
    }, 200);

    setTimer(newTimer);
  };

  const hideDescription = (index) => {
    if (timer) {
      clearTimeout(timer);
    }

    const newDescriptions = [...descriptions];
    newDescriptions[index] = false;
    setDescriptions(newDescriptions);
  };

  return (
<div className="album-carousel">
  <Slider ref={sliderRef} {...settings}>
    {albumOrdenado.map((album, index) => (
      <div key={album.id}>
        <div
          className="slide"
          onMouseEnter={() => showDescription(index)}
          onMouseLeave={() => hideDescription(index)}
        >
          <div className="slide-container">
            <figure className="figureclass">
              <div className="img-container">
              <Link
                  to={`/capsulify/album/${album.id}`}
                  className="linkalbum"
                >
                <img
                  src={album.img}
                  alt={album.alt}
                  className="bd-placeholder-img card-img-top"
                  width="100%"
                  height="100%"
                />
                </Link>
              </div>
              {descriptions[index] && (
                <div className="descripcion">
                  <p className="descripcion-titulo">{album.titulo}</p>
                  <p>
                    {`${album.descripcion.substring(0, 115)}...`}
                    <a href={`/album/${album.id}`} className="ver-mas">
                      <span> Read More</span>
                    </a>
                  </p>
                </div>
              )}
            </figure>
          </div>
        </div>
      </div>
    ))}
  </Slider>
  <div className="carousel-prev" onClick={() => sliderRef.current.slickPrev()}>
    <i className="fas fa-chevron-left"></i>
  </div>
  <div className="carousel-next" onClick={() => sliderRef.current.slickNext()}>
    <i className="fas fa-chevron-right"></i>
  </div>
</div>
  );
  
};

export default AlbumCarousel;