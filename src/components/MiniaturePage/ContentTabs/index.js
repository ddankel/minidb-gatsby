import React from "react";
import { Tab, Tabs } from "react-bootstrap";

import TagListTab from "./TagListTab";
import RecipesTab from "./RecipesTab";

const ContentTabs = ({ frontmatter, html }) => {
  const multiTabs = frontmatter.recipes || html;

  if (!multiTabs) {
    return <TagListTab frontmatter={frontmatter} />;
  }

  return (
    <Tabs defaultActiveKey={0} id="uncontrolled-tab-example" className="mb-3">
      <Tab eventKey={0} title="Metadata">
        <TagListTab frontmatter={frontmatter} />
      </Tab>
      {html && (
        <Tab eventKey={1} title={"Notes"}>
          <div className="post-body" dangerouslySetInnerHTML={{ __html: html }} />
        </Tab>
      )}
      {frontmatter.recipes && (
        <Tab eventKey={2} title={"Recipes"}>
          <RecipesTab recipes={frontmatter.recipes} />
        </Tab>
      )}
    </Tabs>
  );
};

export default ContentTabs;
