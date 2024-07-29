import React from "react";
import Logo from "../../assets/logo.svg";
import Home from "../../assets/home.svg";
import Card from "../../assets/card.svg";
import People from "../../assets/people.svg";
import Calender from "../../assets/calender.svg";
import Message from "../../assets/message.svg";
import doctorImg from "../../assets/doctor.png";
import setting from "../../assets/settings.svg";
import moreVertical from "../../assets/moreVertical.svg";

import "./styles.css";

export const Navbar = () => {
  return (
    <nav className="nav">
      <div className="logo">
        <img src={Logo} alt="" className="logoImg" />
      </div>
      <div className="links">
        <ul className="linksContainer">
          <li className="link">
            <img src={Home} alt="" className="linkIcon" />
            <span>Overview</span>
          </li>
          <li className="link linkActive">
            <img src={People} alt="" className="linkIcon" />
            <span>Patients</span>
          </li>
          <li className="link">
            <img src={Calender} alt="" className="linkIcon" />
            <span>Schedule</span>
          </li>
          <li className="link">
            <img src={Message} alt="" className="linkIcon" />
            <span>Message</span>
          </li>
          <li className="link">
            <img src={Card} alt="" className="linkIcon" />
            <span>Transactions</span>
          </li>
        </ul>
      </div>
      <div className="profile">
        <img
          src={doctorImg}
          alt=" woman doctor picture"
          className="doctorPic"
        />
        <div className="nameSection">
          <p className="name">Dr. Jose Simmons</p>
          <p className="designation">General Practitioner</p>
        </div>
        <div className="verticalLine" />
        <div className="settings">
          <img src={setting} alt="" className="setting" />
          <img src={moreVertical} alt="" className="moreVertical" />
        </div>
      </div>
    </nav>
  );
};
