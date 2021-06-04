import React from "react";
import {  Link } from "gatsby";

import Layout from "../components/Layout";
import * as style from "../styles/home.module.css";

// markup
const IndexPage = () => {
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

        <img
          src={"/banner.png"}
          alt="site banner"
          style={{ maxWidth: "100%" }}
        />
      </section>
    </Layout>
  );
}

export default IndexPage;
