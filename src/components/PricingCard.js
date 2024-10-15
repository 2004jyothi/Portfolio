import "./PricingCardStyles.css";
import React from "react"
import { Link } from "react-router-dom";
const PricingCard = () => {
  return <div className="pricing">
    <div class="card-container"> 
      <div className="card">
        <h3>- Skills -</h3>
        <span className="bar"></span>
        <p> Python Programming Language</p>
        <p> C Language</p>
        <p> HTML,CSS,PHP,React</p>
        <p> Data Structures and Algorithms</p>
        <p> Cloud Basics</p>
        <p> Object Oriented Concepts</p>
        <p> AI | ML</p>

        <Link to="/contact" className="btn">
        View Profile</Link>
      </div>


      <div className="card">
        <h3>- Achievements -</h3>
        <span className="bar"></span>
        <p> Winner of Mathademia 2k24</p>
        <p> Winner of CodeHunt at SV University,Tirupati</p>
        <p> Hosted an app in play store</p>
        <p> Worked as ML Intern at IndianServers Pvt.Ltd</p>
        <p> Organised a National level hackathon "Hackademia2k24"</p>
        <Link to="/contact" className="btn">
        View Profile</Link>
      </div>

     
    </div>
  </div>;
};

export default PricingCard;
