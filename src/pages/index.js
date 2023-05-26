import React from "react";
import AppLayout from "@/app/layouts/AppLayout";
import GalleryPageContent from "@/modules/gallery/content/GalleryPageContent";

import useFilterStateFromQueryString from "@/common/hooks/useFilterStateFromQueryString";
import usePopulateEntireCollectionStore from "@/common/hooks/usePopulateEntireCollectionStore";

const IndexPage = ({ location }) => {
  useFilterStateFromQueryString({ path: location.pathname, query: location.search });
  usePopulateEntireCollectionStore();

  return (
    <AppLayout variant="wide">
      <GalleryPageContent />
    </AppLayout>
  );
};

export default IndexPage;

/**
 * Gatsby Head component
 */
export const Head = () => {
  return <title>MiniDB</title>;
};
