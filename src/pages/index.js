import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";

export default function Home({ data }) {
  return (
    <Layout>
      <h1>
        {data.allMarkdownRemark.totalCount}
        {" "}
        Post
      </h1>
      {data.allMarkdownRemark.edges.map(({node}) => (   //question #1
        <div key={node.id} style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <h3>
            {node.frontmatter.title} ---
            {node.frontmatter.date}
            {" "}
            <p>{node.excerpt}</p>
          </h3>
        </div>
      ))}
      <p>
        What do I like to do? Lots of course but definitely enjoy building
        websites.
      </p>
    </Layout>
  );
}

export const query = graphql`
 query {
     allMarkdownRemark {
         totalCount
         edges{
             node{
                 id
                 frontmatter {
                     title
                     date(formatString: "DD MMMM, YYYY")
                 }
                 excerpt
             }
         }
     }
 }
`;
