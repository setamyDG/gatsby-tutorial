import React from "react";
import { useStaticQuery, Link, graphql } from "gatsby";
import ListLink from "./ListLink";
import { rhythm } from "../utils/typography";

export default function Layout({ children }) {
  const data = useStaticQuery(
    graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `
  )
  return (
    <div style={{ margin: "3rem auto", maxWidth: 650, padding: "0 1rem" }}>
      <header style={{ marginBottom: "1.5rem" }}>
        <Link to="/" style={{ textShadow: "none", backgroundImage: "none" }}>
          <p>{data.site.siteMetadata.title}</p>
          <h3 style={{ display: "inline" }}>Gatsby tutorial codetain</h3>}
        </Link>
        <ul style={{ listStyle: "none", float: "right" }}>
          <ListLink to="/">Home</ListLink>
          <ListLink to="/about/">About</ListLink>
          <ListLink to="/contact/">Contact</ListLink>
        </ul>
      </header>
      {children}
    </div>
  );
}
