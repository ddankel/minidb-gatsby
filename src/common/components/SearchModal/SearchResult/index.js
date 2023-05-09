import React from "react";
import { Stack } from "react-bootstrap";
import styled from "styled-components";

import GastbyImage from "@/common/components/GatsbyImage";
import useMiniature from "@/common/hooks/useMiniature";
import usePhotos from "@/common/hooks/usePhotos";

import { parseLabelForNeedle } from "./utils";

const Match = styled.span.attrs({
  className: "bg-primary",
})``;

const SearchResult = ({ slug, needle }) => {
  const [imgSrc] = usePhotos(slug);
  const miniature = useMiniature(slug);
  const segments = parseLabelForNeedle(miniature.displayName, needle);

  return (
    <Stack direction="horizontal">
      <GastbyImage image={imgSrc} alt={miniature.displayName} size="50px" />
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
