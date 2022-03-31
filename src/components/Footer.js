import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="col-1">
        <div className="img-bx">
          <img src="/images/logo.png" alt="" />
        </div>
        <div className="text-bx">
          <p>
            Vel voluptua disputationi in, mei in rebum iracundia, ad enim novum
            mei. Esse offendit vis ad, elitr option consectetuer duo te. Et pri
            visse voluptaria, eligendi opor te quo.{" "}
          </p>
        </div>
      </div>
      <div className="col-2">
        <div className="head">
          <h4>Business</h4>
        </div>
        <ul className="footer-links">
          <li>Become a Merchant</li>
          <li>Become an API Partner</li>
          <li>Join Us</li>
        </ul>
      </div>
      <div className="col-2">
        <div className="head">
          <h4>Company</h4>
        </div>
        <ul className="footer-links">
          <li>About</li>
          <li>FAQs</li>
          <li>Contact</li>
          <li>Blog</li>
          <li>Gallery</li>
        </ul>
      </div>
      <div className="col-4">
        <div className="top">
          <div className="head">
            <h4>Follow us</h4>
          </div>
          <div className="social-links">
            <span>.</span>
            <span>.</span>
            <span>.</span>
          </div>
        </div>
        <div className="bottom">
          <div className="head">
            <h4>Payment methods</h4>
          </div>
          <div className="social-links">
            <span>.</span>
            <span>.</span>
            <span>.</span>
          </div>
        </div>
      </div>
      <div className="footer-img">
        <img src="/images/footer.png" alt="" />
      </div>
    </div>
  );
};

export default Footer;
