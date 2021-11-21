import * as React from "react";
import { Helmet } from "react-helmet";

import GuidedSearchPage from "../components/GuidedSearchPage";
import PageLayout from "../layouts/PageLayout";

const IndexPage = () => {
  return (
    <PageLayout>
      <Helmet>
        <title>MiniDB</title>
      </Helmet>
      <GuidedSearchPage />
    </PageLayout>
  );
};

export default IndexPage;
