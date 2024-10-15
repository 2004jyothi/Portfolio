import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
const About = () => {
  return (<div>
    <Navbar />
    <HeroImg2 heading="ABOUT" text="I am a passionate Web Application Developer with a strong focus on building dynamic and responsive web applications. My expertise lies in JavaScript frameworks, particularly React, and I have hands-on experience with front-end technologies like HTML, CSS, and modern JavaScript. I enjoy creating user-friendly, efficient, and innovative solutions to solve real-world problems." />
    <Footer />
  </div>
  );
};

export default About;
