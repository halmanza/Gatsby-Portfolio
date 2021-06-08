import { graphql, Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import Layout from "../../components/Layout";
import * as style from "../../styles/projects.module.css";

export default function Projects({ data }) {
  console.log(data);
  const projects = data.projects.nodes;
  const contact = data.contact.siteMetadata.contact;

  return (
    <Layout>
      <div className={style.portfolio}>
        <h2>Projects</h2>
        <h3>Past,present,and future.</h3>

        <div className={style.projects}>
          {projects.map((project) => (
            <Link to={"/projects/" + project.frontmatter.slug} key={project.id}>
              <div>
                <GatsbyImage
                  image={project.frontmatter.thumbs.childImageSharp.gatsbyImageData}
                  alt="images"
                />
                <h3>{project.frontmatter.title}</h3>
                <p>{project.frontmatter.stack}</p>
              </div>
            </Link>
          ))}
        </div>
        <p>
          Are you interested in having a project developed? You can reach me at
          my email, <a href={"mailto:" + contact}>{contact}</a>
        </p>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query projects {
    projects: allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        id
        frontmatter {
          slug
          stack
          title
          thumbs {
            childImageSharp {
              gatsbyImageData( layout:CONSTRAINED)
            }
          }
        }
      }
    }
    contact: site {
      siteMetadata {
        contact
      }
    }
  }
`;
