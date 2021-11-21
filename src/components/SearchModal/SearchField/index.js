import React from "react";
import { graphql, navigate, StaticQuery } from "gatsby";
import { Typeahead } from "react-bootstrap-typeahead"; // ES2015

const SearchField = () => {
  const inputRef = React.useRef();

  React.useEffect(() => {
    inputRef.current.focus();
  }, []);

  const navigateTo = (selection) => {
    const selectedSlug = selection[0].id;
    navigate(`/minis/${selectedSlug}`);
  };

  return (
    <StaticQuery
      query={graphql`
        query {
          allMarkdownRemark(sort: { fields: [frontmatter___name], order: ASC }) {
            nodes {
              frontmatter {
                slug
                sku
                name
                line
                photos {
                  publicURL
                  childImageSharp {
                    gatsbyImageData(width: 100, quality: 80, aspectRatio: 1, formats: [AUTO])
                  }
                }
                weapons
                armor
                race
                is_painted
              }
            }
          }
        }
      `}
      render={(data) => {
        if (!data) return;
        const options = data.allMarkdownRemark.nodes.map((item) => ({
          id: item.frontmatter.slug,
          label: item.frontmatter.sku || item.frontmatter.name,
        }));

        return (
          <Typeahead
            ref={inputRef}
            clearButton
            highlightOnlyResult={true}
            onFocus={(e) => e.target.select()}
            id="search miniatures by name"
            onChange={(selected) => navigateTo(selected)}
            options={options}
            placeholder="Search"
          />
        );
      }}
    />
  );
};

export default SearchField;
