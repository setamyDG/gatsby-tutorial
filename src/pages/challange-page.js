import React from "react";
import { graphql } from "gatsby";
import Separator from "../components/separator";
import Layout from "../components/layout";

export default function Challange({ data }) {
  return (
    <Layout>
      <h1>Challange site</h1>
      <Separator />
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <h4>{node.frontmatter.title}</h4>
          <p>{node.frontmatter.date}</p>
          <p>{node.excerpt}</p>
        </div>
      ))}
    </Layout>
  );
}

export const query = graphql`
    query {
        allMarkdownRemark {
            totalCount
            edges {
                node {
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
