import { graphql, useStaticQuery } from "gatsby";
import { ImageDataLike, getImage } from "gatsby-plugin-image";

type Node = {
  frontmatter: {
    slug: string;
    photos: ImageDataLike[];
  };
};

/**
 * Fetch the array of gatsby-image objects for the specified miniature
 *
 * Usage:
 *
 * If you're just interested in the first image for a miniature (eg to use as a thumbnail), destructure the returned array to just capture the first image
 *     const [thumbnail] = usePhotos(miniatureSlug)
 *
 * Or capture the entire array to retrieve all of the images
 *     const photos = usePhotos(miniatureSlug)
 */
const usePhotos = (slug: string) => {
  const data = useStaticQuery(query);
  const nodes: Node[] = data.allMarkdownRemark.nodes;
  const thisMini = nodes.find((item) => item.frontmatter.slug === slug);

  if (!thisMini) return [];

  return thisMini.frontmatter.photos.map((photo) => getImage(photo));
};

export const query = graphql`
  query {
    allMarkdownRemark {
      nodes {
        frontmatter {
          slug
          photos {
            publicURL
            childImageSharp {
              gatsbyImageData(
                width: 125
                quality: 80
                aspectRatio: 1
                formats: [AUTO]
                placeholder: BLURRED
                transformOptions: { cropFocus: NORTH }
              )
            }
          }
        }
      }
    }
  }
`;

export default usePhotos;
