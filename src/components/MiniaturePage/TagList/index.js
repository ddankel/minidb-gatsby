import React from "react";

const TagList = ({ frontmatter }) => {
  return (
    <div>
      <h2>Metadata</h2>
      <ul>
        {frontmatter.race && <li>Race: {frontmatter.race.sort().join(", ")}</li>}
        {frontmatter.weapons && <li>Weapon(s): {frontmatter.weapons.sort().join(", ")}</li>}
        {frontmatter.armor && <li>Armor: {frontmatter.armor.sort().join(", ")}</li>}
        <li>Count: {frontmatter.mini_count || 1}</li>
        <li>Status: {frontmatter.status || "unpainted"}</li>
      </ul>
    </div>
  );
};

export default TagList;
