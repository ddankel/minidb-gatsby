import React from "react";
import { FilterProvider } from "./src/context/FilterContext";

import "bootstrap/dist/css/bootstrap.min.css";
import "react-image-gallery/styles/css/image-gallery.css";
import "react-bootstrap-typeahead/css/Typeahead.css";
import "bootstrap/dist/js/bootstrap.min";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootswatch/dist/darkly/bootstrap.min.css";

import "./src/styles/global.css";

export const wrapRootElement = ({ element }) => <FilterProvider>{element}</FilterProvider>;
