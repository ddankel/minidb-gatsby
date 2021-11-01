import { graphql } from "gatsby";
import * as React from "react";
// import Layout from "../components/layout";
// import Seo from "../components/seo";

import { StaticImage } from "gatsby-plugin-image";

export default function BlogPostTemplate({ data: { markdownRemark } }) {
  const { frontmatter, html } = markdownRemark;

  console.log(frontmatter);
  // const foo = require("../../images/icon.png");
  // const bar = require("./test_img.jpg");

  return (
    <div>
      <h1>{frontmatter.title}</h1>
      <h2>{frontmatter.date}</h2>
      <div className="post-body" dangerouslySetInnerHTML={{ __html: html }} />

      {frontmatter.photos &&
        frontmatter.photos.map((src, index) => <img alt="" src={src.publicURL} key={index} />)}

      {/* <StaticImage alt="" src="../../images/Malifaux-DecemberAcolyte-Dankel_1.jpg" /> */}
      {/* <StaticImage alt="" src="../../minis/Malifaux-DecemberAcolyte-Dankel_1.jpg" /> */}
      <div></div>
    </div>
  );
}

console.log("TEST");

export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        layout
        title
        name
        line
        painted
        categories
        photos {
          publicURL
        }
        weapons
        armor
        race
      }
    }
  }
`;
