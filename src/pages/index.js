import * as React from "react";
import { Helmet } from "react-helmet";

import GuidedSearchPage from "../components/GuidedSearchPage";
import AppLayout from "../layouts/AppLayout";

const IndexPage = () => {
  return (
    <AppLayout>
      <Helmet>
        <title>MiniDB</title>
      </Helmet>
      <GuidedSearchPage />
    </AppLayout>
  );
};

export default IndexPage;
