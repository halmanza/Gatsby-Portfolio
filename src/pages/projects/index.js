import { graphql, Link } from "gatsby";
import React from "react";
import Layout from "../../components/Layout";
import * as style from "../../styles/projects.module.css";

export default function Projects({ data }) {
  console.log(data)
  const projects = data.allMarkdownRemark.nodes;
  const siteProject= data.site.siteMetadata;
  return (
    <Layout>
      <div className={style.portfolio}>
        <h2>Projects</h2>
        <h3>Past,present,and future.</h3>
        <div className={style.projects}>
          {projects.map((project) => (
            <Link to={"/projects/" + project.frontmatter.slug} key={project.id}>
              <div>
                <h3>{project.frontmatter.title}</h3>
                <p>{project.frontmatter.stack}</p>
                
              </div>
            </Link>
            
          ))}

          
         
        </div>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query MyQuery {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          slug
          stack
          title
        }
        id
      }
    }
    site{
      siteMetadata{
        contact
      }
    }
  }
`;
