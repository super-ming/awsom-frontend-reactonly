import React from 'react';

const FooterSocialMedia = () => (
  <div className="footer_socialmedia">
    <div className="footer_socialmedia_container">
      {/* using font awesome CDN for icons */}
      <span className="fa-stack fa-2x">
        <a
          href="https://www.facebook.com/awsomWA"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fas fa-circle fa-stack-2x" />
          <i className="fab fa-facebook-f fa-stack-1x" />
        </a>
      </span>
      <span className="footer_socialmedia_tab" />
      <span className="fa-stack fa-2x">
        <a
          href="http://www.yelp.com/biz/the-andrew-white-school-of-music-kenmore-3"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fas fa-circle fa-stack-2x" />
          <i className="fab fa-yelp fa-stack-1x" />
        </a>
      </span>
      <span className="footer_socialmedia_tab" />
      <span className="fa-stack fa-2x">
        <a
          href="https://www.instagram.com/awsomusic/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fas fa-circle fa-stack-2x" />
          <i className="fab fa-instagram fa-stack-1x" />
        </a>
      </span>
      <span className="footer_socialmedia_tab" />
      <span className="fa-stack fa-2x">
        <a
          href="https://www.linkedin.com/company/andrew-white-school-of-music/?trk=biz-companies-cym"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fas fa-circle fa-stack-2x" />
          <i className="fab fa-linkedin-in fa-stack-1x" />
        </a>
      </span>
    </div>
  </div>
);

export default FooterSocialMedia;
