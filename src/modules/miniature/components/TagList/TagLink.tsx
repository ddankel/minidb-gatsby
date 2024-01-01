import { Link } from "gatsby";
import _ from "lodash";
import queryString from "query-string";
import { Button } from "react-bootstrap";

type TagLinkProps = {
  to?: string;
  attribute: string;
  tag: string;
};

const TagLink = ({ to, attribute, tag, ...restProps }: TagLinkProps) => {
  const filter = { [`${attribute}Filter`]: tag };
  const query = queryString.stringify(filter);

  return (
    <Link to={`/?${query}`} {...restProps}>
      <Button className="badge" variant="secondary" {...restProps}>
        {_.startCase(tag)}
      </Button>
    </Link>
  );
};

export default TagLink;
