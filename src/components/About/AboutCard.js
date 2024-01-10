import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Vyom Galia </span>
            from <span className="purple"> Mumbai, India.</span>
            <br />
            I am currently pursuing my undergrad CS degree.
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> sports
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Just show up !!"{" "}
          </p>
          <footer className="blockquote-footer">vyom galia</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
