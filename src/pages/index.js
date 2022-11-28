import * as React from "react";

import GuidedSearchPage from "../components/GuidedSearchPage";
import AppLayout from "../layouts/AppLayout";

const IndexPage = () => {
  return (
    <AppLayout variant="wide">
      <GuidedSearchPage />
    </AppLayout>
  );
};

export default IndexPage;

export const Head = () => {
  return <title>MiniDB</title>;
};
