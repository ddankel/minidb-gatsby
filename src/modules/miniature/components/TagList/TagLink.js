import { Link } from "gatsby";
import _ from "lodash";
import queryString from "query-string";
import { Button } from "react-bootstrap";

const TagLink = ({ to, attribute, tag, ...restProps }) => {
  const filter = { [`${attribute}Filter`]: tag };
  const query = queryString.stringify(filter);

  return (
    <Button as={Link} className="badge" variant="secondary" to={`/?${query}`} {...restProps}>
      {_.startCase(tag)}
    </Button>
  );
};

export default TagLink;
