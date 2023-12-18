import React from "react";
import facebook from "./pics/facebook.svg";
import behance from "./pics/behance.svg";
import twitter from "./pics/twitter.svg";
import Ellipse from "./pics/Ellipse.svg";
import youtube from './pics/youtube.svg';
import news from "./pics/news.jpg";

import { useState } from "react";

const Navbar = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const subModal = () => {
        setIsModalOpen(!isModalOpen);
    };
    return ( 
        <nav>
        <div className="navbar">
          <div>
            <p className="blogger">Traveller</p>
          </div>
          <div className="links">
            <div className="nav-bar">
              <li>Home</li>
              <li>About</li>
              <li>Articles</li>
              <li className="contact-border" onClick={subModal}>
                Sub
              </li>
              {isModalOpen && (
                <div className="modal">
                  <div className="newletter">
                    <div>
                      <img className="news-img" src={news} alt="" />
                    </div>
                    <div className="content">
                      <h2>Get the latest Deals and more</h2>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Omnis, sint rerum? Obcaecati, sint accusamus? Quos
                        impedit quam quis accusamus recusandae doloribus. Non
                        itaque adipisci, distinctio nisi architecto voluptatem
                        necessitatibus dolor eveniet beatae ipsa repellat nobis.
                      </p>
                        <input placeholder="Email" type="email" className="email"/>
                      <div>
                      </div>
                      <button className="sub-btn">Subscribe</button>
                    </div>
                  </div>
                </div>
              )}
              <div className="icons">
                <img src={facebook} alt="" />
                <img src={behance} alt="" />
                <img src={twitter} alt="" />
                <img src={youtube} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div class="container">
          <p className="adventure">ADVENTURE</p>
          <h1>The Best Travel Agency In The West, Start That Memoriable Journey With Us Today</h1>
          <div className="date">
            <p className="datee">08.08.2021</p>
            <p>-</p>
            <p className="progress">
              Progressively incentivize cooperative systems through technically
              sound functionalities. The credibly productivate seamless data.
            </p>
          </div>
        </div>

        <div className="ellipse">
          <img src={Ellipse} alt="" />
          <img src={Ellipse} alt="" />
          <img src={Ellipse} alt="" />
        </div>
      </nav>
     );
}
 
export default Navbar;