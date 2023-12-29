import RecipeItem from "./RecipeItem";

type RecipesProps = {
  recipes: string[];
};

const Recipes = ({ recipes }: RecipesProps) => {
  if (!recipes) return null;

  return (
    <div className="post-body">
      <h4>Recipes</h4>

      {recipes.map((recipe, index) => (
        <RecipeItem recipe={recipe} key={index} />
      ))}
    </div>
  );
};

export default Recipes;
