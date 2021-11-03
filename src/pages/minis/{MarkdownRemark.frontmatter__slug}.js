import { graphql } from "gatsby";
import * as React from "react";
// import Layout from "../components/layout";
// import Seo from "../components/seo";
import { Navbar, Nav } from "react-bootstrap";

import { StaticImage, getImage, GatsbyImage } from "gatsby-plugin-image";
import { Col, Container, Row, Tab, Tabs, Breadcrumb, Stack } from "react-bootstrap";
import splitRenderedHtml from "../../utils/split_rendered_html";
import Miniature from "../../components/Miniature";

import PageLayout from "../../layouts/PageLayout";

export default function BlogPostTemplate({ data: { markdownRemark } }) {
  const { frontmatter, html } = markdownRemark;

  console.log(frontmatter);
  console.log(html);
  console.log("split", html.split(/(?=<h2>)/g));
  console.log("title", html.split(/(?=<h2>)/g)[0].match(/(?<=<h2>).*(?=<\/h2>)/g));
  // const foo = require("../../images/icon.png");
  // const bar = require("./test_img.jpg");

  console.log(splitRenderedHtml(html));
  const htmlSections = splitRenderedHtml(html);

  return (
    <PageLayout>
      <Miniature {...{ frontmatter, html }} />
    </PageLayout>
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
          childImageSharp {
            gatsbyImageData(width: 400, aspectRatio: 1, formats: [AUTO])
          }
        }
        weapons
        armor
        race
      }
    }
  }
`;
