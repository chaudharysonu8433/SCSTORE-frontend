import React from "react";
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="col">
          <div className="title">About</div>
          <div className="text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam,
            magni! Ratione accusantium obcaecati maxime dolorem nihil quidem.
            Adipisci distinctio cum quae asperiores iste!
          </div>
        </div>
        <div className="col">
            <div className="title">Contact</div>
            <div className="c-item">
                <FaLocationArrow/>
                <div className="text">S2 Gurgaon second floor,281121
                </div>
            </div>
            <div className="c-item">
                <FaMobileAlt/>
                <div className="text">Phone:2145 852 3698
                </div>
            </div>
            <div className="c-item">
                <FaEnvelope/>
                <div className="text">Email:sonu@gmail.com</div>
            </div>
            </div>
        <div className="col">
            <div className="title">Categories</div>
            <span className="text">Headphones</span>
            <span className="text">Smart Watches</span>
            <span className="text">Earbuds</span>
            <span className="text">Bluetooth Speakers</span>
            <span className="text">Home Theatre</span>
            <span className="text">Projectors</span>
            </div>
        <div className="col">
            <div className="title">Pages</div>
            <span className="text">Home</span>
            <span className="text">About</span>
            <span className="text">Privacy policy</span>
            <span className="text">Returns</span>
            <span className="text">Terms & Conditions</span>
            <span className="text">Contact Us</span>
            </div>
      </div>
      <div className="bottom-bar">
        <div className="bottom-bar-content">
            <div className="text">
                SCSTORE CREATED BY SONU CHAUDHARY. PREMIUM E-COMMERCE SOLUTIONS
            </div>
            <img src={Payment}/>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
