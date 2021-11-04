import React from "react";
import { Tab, Tabs } from "react-bootstrap";
import TagList from "../TagList";

const InfoTabs = ({ frontmatter, bodySections }) => {
  return (
    <Tabs defaultActiveKey={0} id="uncontrolled-tab-example" className="mb-3">
      {bodySections.map(({ title, html }, index) => {
        return (
          html.length && (
            <Tab eventKey={index} title={title || "Description"} key={index}>
              <div className="post-body" dangerouslySetInnerHTML={{ __html: html }} />
            </Tab>
          )
        );
      })}

      <Tab eventKey="metadata" title="Metadata">
        <TagList frontmatter={frontmatter} />
      </Tab>
    </Tabs>
  );
};

export default InfoTabs;
