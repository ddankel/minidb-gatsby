type RecipeItemProps = {
  recipe: string;
};

const RecipeItem = ({ recipe }: RecipeItemProps) => {
  const [title, ...mixes] = recipe.split(" - ");
  return (
    <>
      <u>{title}</u>
      <ul>{mixes && mixes.map((mix, index) => <li key={index}>{mix}</li>)}</ul>
    </>
  );
};

export default RecipeItem;
