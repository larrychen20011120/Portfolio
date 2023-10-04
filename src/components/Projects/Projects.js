import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import art from "../../Assets/Projects/art.png";
import medical from "../../Assets/Projects/medical.png";
import drbc from "../../Assets/Projects/drbc.png";
import tsmc from "../../Assets/Projects/tsmc.png";
import vocabuilder from "../../Assets/Projects/vocabuilder.jpg";
import aicup from "../../Assets/Projects/aicup.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tsmc}
              isBlog={false}
              title="TSMC Construction Site Management System"
              description="The project in meichuhackathon which finally won the second place. We use TSMC helmet dataset to tune yolov7 model. The whole project contains Raspberry Pi, camera with yolov7, line chatbot and web developments with laravel framework. Our model outperformed other competitors by special data augmentation and correct learning rate."
              ghLink="https://github.com/larrychen20011120/tsmc-hackathon"
              demoLink="https://drive.google.com/file/d/13jPO3E0d8XV5xupv16AaW0nM8Lk-Vv3c/view?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aicup}
              isBlog={false}
              title="AI Cup Fact Verification"
              description="It is a AI competition in Taiwan. The pipeline of fact checking consists of three parts: document retrieval, sentence selection and fact checking. I apply search engine and wiki api as the document retrieval method and then choose chinese-bert-base as sentence retrieval and fact checking model. Eventually, I got the excellent work prize!"
              ghLink="https://github.com/larrychen20011120/aicup_fact_verification"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={drbc}
              isBlog={false}
              title="DrBC-Pytorch"
              description="The implementation of paper named 'Learning to Identify High Betweenness Centrality Nodes from Scratch: A Novel Graph Neural Network Approach' (CIKM 2019). It is mainly done by pytorch, networkx, and torch-geometric packages. The core idea of the paper is really interesting, which takes generated graphs to train model and verifies the model on graph in different size. The performance, however, can still remain."
              ghLink="https://github.com/larrychen20011120/DrBC-pytorch"             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={art}
              isBlog={false}
              title="Art Line-Chatbot"
              description="This project mainly used Line chatbot and style transfer techniques. Moreover, it is divided into 2 servers. One is for chatbot repling service and the other is for style-transfered drawing service."
              ghLink="https://github.com/larrychen20011120/TOC_Project"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={medical}
              isBlog={false}
              title="Medical Inquiry Analysis System"
              description="A web application for doctors is used to analysis the medical inquiry sound files. In order to split the file into doctor's voice and patient voices, I apply the speaker diarization techniques. We analysis the detected result by checking the medical terms and showing it with wordcloud. Additionally, We also allow doctors to share their report to each other."
              ghLink="https://github.com/larrychen20011120/inquiry_analysis"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vocabuilder}
              isBlog={false}
              title="VocaBulder Windows APP"
              description="This is a java windows application with javafx UI displaying. There are three main functions in it, creating vocabulary cards, 7000-word quiz, quiz score's tracking. It helps senior-high students learn 7000 words more efficiently!"
              ghLink="https://github.com/larrychen20011120/VocaBuilder"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
