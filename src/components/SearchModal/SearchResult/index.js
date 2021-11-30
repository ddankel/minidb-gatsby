import React from "react";
import { Stack } from "react-bootstrap";
import styled from "styled-components";

import GastbyImage from "../../GatsbyImage";
import useFrontmatter from "../../../hooks/useFrontmatter";
import usePhotos from "../../../hooks/usePhotos";
import { parseLabelForNeedle } from "./utils";

const Match = styled.span.attrs({
  className: "bg-primary",
})``;

const SearchResult = ({ slug, needle }) => {
  const [imgSrc] = usePhotos(slug);
  const { name, sku } = useFrontmatter(slug);
  const displayName = sku || name;
  const segments = parseLabelForNeedle(displayName, needle);

  return (
    <Stack direction="horizontal">
      <GastbyImage image={imgSrc} alt={displayName} size="50px" />
      <div className="px-2">
        {segments
          .filter((x) => x)
          .map((segment, index) => {
            if (segment.toLowerCase() === needle.toLowerCase()) {
              return <Match key={index}>{segment}</Match>;
            }

            return <span key={index}>{segment}</span>;
          })}
      </div>
    </Stack>
  );
};

export default SearchResult;
