import * as React from "react";

import Layout from "@/components/Layout";
import GalleryPageContent from "@/modules/gallery/content/GalleryPageContent";

const IndexPage = () => {
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
