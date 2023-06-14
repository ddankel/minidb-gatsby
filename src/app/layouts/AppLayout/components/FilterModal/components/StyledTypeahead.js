import { Typeahead } from "react-bootstrap-typeahead";

import styled from "styled-components";

const StyledTypeahead = styled(Typeahead)`
  & * .btn-close {
    color: black;
    &:hover {
      color: black;
    }
  }
`;

export default StyledTypeahead;
