import { PageProps } from "gatsby";

import AppLayout from "@/app/layouts/AppLayout";
import GalleryPageContent from "@/modules/gallery/content/GalleryPageContent";

import useFilterStateFromQueryString from "@/common/hooks/useFilterStateFromQueryString";
import usePopulateEntireCollectionStore from "@/common/hooks/usePopulateEntireCollectionStore";

const IndexPage = ({ location }: PageProps) => {
  useFilterStateFromQueryString({ path: location.pathname, query: location.search });
  usePopulateEntireCollectionStore();

  return (
    <AppLayout variant="wide" enableFilter={true}>
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
