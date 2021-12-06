import * as React from "react";
import { Link } from "gatsby";
import { Helmet } from "react-helmet";

import AppLayout from "../layouts/AppLayout";

// markup
const NotFoundPage = () => {
  return (
    <AppLayout>
      <Helmet>
        <title>Page Not Found | MiniDB</title>
      </Helmet>
      <div class="page-wrap d-flex flex-row align-items-center">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-12 text-center">
              <span class="display-1 d-block">404</span>
              <div class="mb-4 lead">The page you are looking for was not found.</div>
              <Link to="/"> Back to Home </Link>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default NotFoundPage;
