import React from "react";
import AppLayout from "@/app/layouts/AppLayout";
import GalleryPageContent from "@/modules/gallery/content/GalleryPageContent";

import useFilterStateFromQueryString from "@/common/hooks/useFilterStateFromQueryString";
import useCollectionStore from "@/common/hooks/useCollectionStore";
import { useArchetypeFilter, useSpeciesFilter } from "@/common/hooks/useFilterStore";
import useMiniatureCollection from "@/common/hooks/useMiniatureCollection";

const IndexPage = ({ location }) => {
  useFilterStateFromQueryString({ path: location.pathname, query: location.search });

  const entireCollection = useCollectionStore((state) => state.entireCollection);
  const galleryFilter = useCollectionStore((state) => state.galleryFilter);
  const filteredCollection = useCollectionStore((state) => state.filteredCollection);
  const speciesFilter = useSpeciesFilter();
  const archetypeFilter = useArchetypeFilter();
  const setEntireCollection = useCollectionStore((state) => state.actions.setEntireCollection);
  // console.log(
  //   "index test-----",
  //   entireCollection,
  //   galleryFilter,
  //   filteredCollection,
  //   speciesFilter,
  //   archetypeFilter
  // );

  const collection = useMiniatureCollection();

  React.useEffect(() => {
    // console.log("rendering?", entireCollection, collection);

    if (entireCollection.length && collection.length) return;
    console.log("setting ent col");
    setEntireCollection(collection);
  }, [collection]);

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
