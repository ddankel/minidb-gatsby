import React from "react";
import Layout from "@/components/Layout";
import GalleryPageContent from "@/modules/gallery/content/GalleryPageContent";

import useFilterStateFromQueryString from "@/hooks/useFilterStateFromQueryString";

const IndexPage = ({ location }) => {
  useFilterStateFromQueryString({ path: location.pathname, query: location.search });

  return (
    <Layout variant="wide">
      <GalleryPageContent />
    </Layout>
  );
};

export default IndexPage;

/**
 * Gatsby Head component
 */
export const Head = () => {
  return <title>MiniDB</title>;
};
