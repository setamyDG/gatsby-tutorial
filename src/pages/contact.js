import React from "react";
import { Link } from "gatsby";
import Header from "../components/header";

export default function Contact() {
  return (
    <div>
      <Header headerTitle="Contact" />
      <Link to="/">Home</Link>
    </div>
  );
}
