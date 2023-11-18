import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mb-4">
            <h5>About Us</h5>
            <h7>
            Welcome to Table Tales – your go-to restaurant booking app! 
            We're here to simplify your dining experience. 
            Explore top-notch restaurants, reserve your table effortlessly, and make every meal memorable. 
            Table Tales is your key to hassle-free dining adventures. 
            Cheers to savouring moments and creating delightful memories, one reservation at a time!
            </h7>
          </div>
          <div className="col-md-6">
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li>Email: contact@tabletales.com</li>
              <li>Phone: 080-26790623</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bottom-footer">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <p className="text-center">
                &copy; {new Date().getFullYear()} Table Tales. All rights
                reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
