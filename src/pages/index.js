import React from "react";
import {Link} from 'gatsby';
import Header from "../components/header";

export default function Home() {
  return (
    <div>
      Hello world!
      <p>tak</p>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
      <Header headerTitle="HOME" />
      <Link to='/about/'>About</Link>
      <Link to='/contact/'>Contact</Link>
    </div>
  );
}
