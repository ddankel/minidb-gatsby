import * as React from "react";
import { Link } from "gatsby";
import PageLayout from "../layouts/PageLayout";

// markup
const NotFoundPage = () => {
  return (
    <PageLayout>
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
    </PageLayout>
  );
};

export default NotFoundPage;
