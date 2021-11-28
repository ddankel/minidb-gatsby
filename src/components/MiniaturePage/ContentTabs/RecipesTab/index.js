import React from "react";
import RecipeItem from "./RecipeItem";

const RecipesTab = ({ recipes, ...restProps }) => {
  return (
    <div className="post-body">
      <h2>Recipes</h2>

      {recipes.map((recipe, index) => (
        <RecipeItem recipe={recipe} key={index} />
      ))}
    </div>
  );
};

export default RecipesTab;
