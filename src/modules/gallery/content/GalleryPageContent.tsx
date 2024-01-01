import { useEntireCollection, useFilteredCollection } from "@/common/hooks/useCollections";
import ActiveFilters from "../components/ActiveFilters";
import DesktopMenu from "../components/DesktopMenu";
import Gallery from "../components/Gallery";
import MobileMenu from "../components/MobileMenu";
import { FlexContainer, GalleryContainer, StatusMessage } from "./GalleryPageContent.styled";

const GalleryPageContent = () => {
  const filteredCollection = useFilteredCollection();
  const entireCollection = useEntireCollection();

  const isLoading = !entireCollection.length;
  const hasResults = !!filteredCollection.length;

  return (
    <>
      <MobileMenu />
      <FlexContainer>
        <DesktopMenu />
        <GalleryContainer>
          <ActiveFilters />
          {isLoading && <StatusMessage>Loading Miniatures...</StatusMessage>}
          {!hasResults && !isLoading && <StatusMessage>No matching results.</StatusMessage>}
          {hasResults && <Gallery collection={filteredCollection} />}
        </GalleryContainer>
      </FlexContainer>
    </>
  );
};

export default GalleryPageContent;
