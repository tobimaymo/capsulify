import "./HomeHeader.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Header = () => {
    
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: false
  };

  return (
    <div className="header-carousel">
    <Slider {...settings}>
      <div className="header-carousel-container">
        <div className="header-carousel-description">
          <h2>Taylor Swift: The Eras Tour</h2>
          <p>The Eras Tour is the sixth current headlining concert tour by American singer-songwriter Taylor Swift. Having not toured for her studio albums Lover, Folklore, and Evermore due to the COVID-19 pandemic, Swift is embarking on the Eras Tour in support of all of her albums, including her latest, Midnights.</p>
        </div>
        <img className="header-carousel-image" src={process.env.PUBLIC_URL + "/img/tstet.jpg"} alt="slide1" />
      </div>
      <div className="header-carousel-container">
        <div className="header-carousel-description">
          <h2>BTS’s Jimin Confirms Release Date For 1st-Ever Solo Album “FACE”</h2>
          <p>BTS’s Jimin has officially announced the release date of his first solo album! Earlier this month, Jimin got fans hyped by revealing during a Weverse live broadcast that his first-ever solo album was likely dropping in March. On February 22 at midnight KST, BIGHIT MUSIC shared an official announcement regarding Jimin’s first solo album “FACE,” which will be released on March 24 at 1 p.m. KST</p>
        </div>
        <img className="header-carousel-image" src={process.env.PUBLIC_URL + "/img/jiminSmfpt2.png"} alt="slide2" />
      </div>
      <div className="header-carousel-container">
        <div className="header-carousel-description">
          <h2>BTS’s RM Is Being Praised For His Unfiltered And Honest Answers In A Recent Hard-Hitting Interview</h2>
          <p>‘Korea is a country that has been invaded, razed to the ground, torn in two. Just 70 years ago, there was nothing. We were getting aid from the IMF and the UN. But now, the whole world is looking at Korea. How is that possible? How did that happen? Well, because people try so fucking hard to better themselves.’ RM’s powerful answer comes to a question posed by a reporter for a recent interview of the rapper, producer, and artist, on behalf of the Spanish newspaper, El País.</p>
        </div>
        <img className="header-carousel-image" src={process.env.PUBLIC_URL + "/img/rminterview.jpg"} alt="slide3" />
      </div>
    </Slider>
    </div>
  );
};

export default Header;