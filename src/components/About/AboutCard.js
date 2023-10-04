import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Larry Chen </span>
            from <span className="purple"> Taiwan.</span>
            <br /> I am a senior student pursuing a bachelor degree
            in <span className="purple"> NCKU </span>
             Computer Science and Information Engineering department.
            <br />
            Additionally, I am currently learning <span className="purple"> web development </span>
            and <span className="purple"> machine learning. </span>
            Also, I'd like to make contributions to machine learning as well as open source projects. 
            <br />
            <br />
            Apart from computer science, some other activities that I love to do:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> &nbsp; Movies
            </li>
            <li className="about-activity">
              <ImPointRight /> &nbsp; Table Tennis
            </li>
            <li className="about-activity">
              <ImPointRight /> &nbsp; Swimming
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Reputation is what others think of you; charateristic is what you truely are!"{" "}
          </p>
          <footer className="blockquote-footer">The King's Man</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
