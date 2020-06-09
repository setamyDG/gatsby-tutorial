import React from "react";
import { Link } from "gatsby";
import Header from "../components/header";
import Container from "../components/container";
import styles from "./about.module.css";
import User from "../components/user";

export default function About() {
  return (
    <div style={{ color: "teal" }}>
      <h1>About</h1>
      <Header headerTitle="title" />
      <Header headerTitle="title2" />
      <p>ok</p>
      <Link to="/"> Home </Link>
      <br />
      <Container>
        <Header headerTitle="About CSS Moudules" />
        <p>section 'Styling using CSS modules'</p>
        <User
          username="abc"
          avatar="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"
          excerpt="lorem ipsum is a dummy text"
        />
        <User
          username="cba"
          avatar="https://s3.amazonaws.com/uifaces/faces/twitter/vladarbatov/128.jpg"
          excerpt="lorem ipsum is a dummy text"
        />
      </Container>
    </div>
  );
}
