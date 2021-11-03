import React from "react";
import { Tab, Tabs } from "react-bootstrap";
import TagList from "../TagList";

const InfoTabs = ({ frontmatter, bodySections }) => {
  return (
    <Tabs
      defaultActiveKey={bodySections[0].title || "Description"}
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      {bodySections.map(({ title, html }) => {
        title = title || "Description";
        return (
          <Tab eventKey={title} title={title}>
            <div className="post-body" dangerouslySetInnerHTML={{ __html: html }} />
          </Tab>
        );
      })}

      <Tab eventKey="metadata" title="Metadata">
        <TagList frontmatter={frontmatter} />
      </Tab>
    </Tabs>
  );
};

export default InfoTabs;
