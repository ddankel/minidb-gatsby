import React from "react";

const RecipeItem = ({ recipe }) => {
  const [title, ...mixes] = recipe.split(" - ");
  return (
    <>
      <u>{title}</u>
      <ul>{mixes && mixes.map((mix, index) => <li key={index}>{mix}</li>)}</ul>
    </>
  );
};

const Recipes = ({ recipes }) => {
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
