import TagLink from "./TagLink";

type TagListProps = {
  attribute: string;
  tags: string[];
};

const TagList = ({ attribute, tags = [] }: TagListProps) => {
  return (
    <>
      {tags.map((tag) => (
        <TagLink attribute={attribute} tag={tag} key={tag} />
      ))}
    </>
  );
};

export default TagList;
