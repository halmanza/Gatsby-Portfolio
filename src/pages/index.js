import React from "react";
import {  graphql, Link } from "gatsby";
import {GatsbyImage,getImage} from "gatsby-plugin-image";
import Layout from "../components/Layout";
import * as style from "../styles/home.module.css";

// markup
const IndexPage = ({data}) => {
  const image=getImage(data.banner.childImageSharp)
  return (
    <Layout>
      <section className={style.header}>
        <div>
          <h2>Welcome</h2>
          <h3>The intersection of design and development</h3>
          <p>Arizona based web developer</p>
          <Link to="/projects" className={style.btn}>
            Portfolio
          </Link>
        </div>

        <GatsbyImage image={image} alt="abstract art"/>
      </section>
    </Layout>
  );
}
export const query= graphql`
query image{
  banner:file(relativePath: {eq: "banner.png"}) {
    id
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH, formats: PNG, placeholder: BLURRED)
    }
  }
}
`

export default IndexPage;
