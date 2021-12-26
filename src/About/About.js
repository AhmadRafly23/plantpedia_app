import React from "react";
import "./About.css";
import { FiMail } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { AiOutlinePhone } from "react-icons/ai";

class About extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="about">
          <img src="/foto.jpg" alt="profile" />
          <p>Shinji Kagawa</p>
          <div className="student">Manager</div>
          <div className="line"></div>
          <div className="location">
            <p className="info">
              <HiOutlineLocationMarker
                className="icon"
                size="18px"
                color="#484d49"
              />
              Location
            </p>
            <p>Sleman, Yogyakarta</p>
          </div>
          <div className="location">
            <p className="info">
              <AiOutlinePhone className="icon" size="18px" color="#484d49" />
              Number
            </p>
            <p>+6283-820-653-721</p>
          </div>
          <div className="location">
            <p className="info">
              <FiMail className="icon" size="18px" color="#484d49" />
              Email
            </p>
            <p>arafly@gmail.com</p>
          </div>
          <p className="prak">PlantPedia App</p>
        </div>
      </div>
    );
  }
}

export default About;
