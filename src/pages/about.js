import React from "react";
import { Link } from "gatsby";
import Header from "../components/header";

export default function About() {
  return (
    <div style={{ color: "teal" }}>
      <h1>About</h1>
      <Header headerTitle="title" />
      <Header headerTitle="title2" />
      <p>ok</p>
      <Link to="/"> Home </Link>
    </div>
  );
}
