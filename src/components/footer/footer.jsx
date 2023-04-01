import React from "react";
import "./footer.css";

const FooterBar = () => {
  return (
    <footer>
      <div className="rounded-social-buttons">
        <a className="social-button facebook" href="https://www.facebook.com/">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a className="social-button github" href="https://github.com/tobimaymo">
          <i className="fab fa-github"></i>
        </a>
        <a
          className="social-button linkedin"
          href="https://www.linkedin.com/in/tobias-maymo/"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a className="social-button youtube" href="https://www.youtube.com/">
          <i className="fab fa-youtube"></i>
        </a>
        <a
          className="social-button instagram"
          href="https://www.instagram.com/"
        >
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </footer>
  );
};
export default FooterBar;
