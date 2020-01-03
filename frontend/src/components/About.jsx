import React from 'react';
import '../styles/About.css';


class About extends React.Component {
  render () {
    return (
      <div className="about-modal-container">
        <h1 className="about-logo">SPLAT</h1>
        <hr />
        <p>
          Splat is the next big thing in musical innovation. Spin hot
          mind-bending tracks and shake the foundations of the music industry!
          Play your newest creation for your friends and hear them exclaim,
          "That's neat I guess", "Why's it called 'SPLAT'?" and "Hire that team
          right the heck now!" Check out our project on
          <a
            target="_blank"
            href="https://www.github.com/debevoise/Splat"
            rel="noopener noreferrer"
          >
            Github.
          </a>
        </p>
        <h2>The genius behind SPLAT</h2>
        <h4>Simon - Team Lead</h4>
        <a
          href="https://github.com/debevoise"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github"></i>GitHub
        </a>
        <h4>Sage - Backend Lead</h4>
        <a
          href="https://github.com/Saaaaaage"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github"></i>GitHub
        </a>{" "}
        |
        <a
          href="https://www.linkedin.com/in/sage-browning-a0351747"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin"></i>LinkedIn
        </a>{" "}
        |
        <a
          href="https://angel.co/sage-browning"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-angellist"></i>AngelList
        </a>
        <h4>Hunter - Frontend Lead</h4>
        <a
          href="https://github.com/hm-factor"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github"></i>GitHub
        </a>
        <h4>Phillip - Flex Dev</h4>
        <a
          href="https://github.com/ParaLogia"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github"></i>GitHub
        </a>
      </div>
    );
  }
}

export default About;