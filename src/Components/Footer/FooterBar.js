import React from 'react'
import './FooterBar.css'

const FooterBar = () => {
  return (
<footer>
  <div className="rounded-social-buttons">
      <a className="social-button facebook" href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a>
      <a className="social-button twitter" href="https://www.twitter.com/"><i className="fab fa-twitter"></i></a>
      <a className="social-button linkedin" href="https://www.linkedin.com/in/tobias-mateo-maymo/"><i className="fab fa-linkedin"></i></a>
      <a className="social-button youtube" href="https://www.youtube.com/"><i className="fab fa-youtube"></i></a>
      <a className="social-button instagram" href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a>
    </div>
</footer>
  )
}
export default FooterBar