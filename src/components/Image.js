import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import { GatsbyImage } from "gatsby-plugin-image";

const Image = ({ fileName, alt, style }) => {
  const { allImageSharp } = useStaticQuery(graphql`
    query {
      allImageSharp {
        nodes {
          fluid(maxWidth: 1600, quality: 90) {
            originalName
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const fluid = allImageSharp.nodes.find((n) => n.fluid.originalName === fileName).fluid;

  return (
    <figure>
      <Img fluid={fluid} alt={alt} style={style} />
    </figure>
  );
};

export default Image;
