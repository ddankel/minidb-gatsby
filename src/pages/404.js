import * as React from "react";
import { Link } from "gatsby";

import AppLayout from "../layouts/AppLayout";

// markup
const NotFoundPage = () => {
  return (
    <AppLayout>
      <div className="page-wrap d-flex flex-row align-items-center">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12 text-center">
              <span className="display-1 d-block">404</span>
              <div className="mb-4 lead">The page you are looking for was not found.</div>
              <Link to="/"> Back to Home </Link>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default NotFoundPage;

export const Head = () => {
  return <title>Page Not Found | MiniDB</title>;
};
