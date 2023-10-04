import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/me.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillFacebook,
  AiFillInstagram,
} from "react-icons/ai";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm curious about techniques in computer science and wish to become a ML engineer in the future. 
              <br />
              <br />I am familiar with programming languages like
              <i>
                <b className="purple"> Python, C++, Javascript. </b>
              </i>
              <br />
              <br />
              I'm interested in developing &nbsp;
              <i>
                <b className="purple">Machine Learning Applications</b> and
                also in areas related to{" "}
                <b className="purple">
                  Natural Language Processing &nbsp;
                </b>
                and &nbsp;
                <b className="purple">
                  Computer Vision.
                </b>
              </i>
              <br />
              <br />
              I'm currently learning frontend and backend techniques, such as &nbsp; 
              <b className="purple">React</b>, &nbsp;
              <b className="purple">Typescript</b>, and &nbsp;
              <b className="purple">NodeJs.</b>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid myPhoto" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/larrychen20011120"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/people/%E9%99%B3%E5%86%A0%E5%BB%B7/100003520606054/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillFacebook/>
                </a>
              </li>
              
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/larrrychen/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
