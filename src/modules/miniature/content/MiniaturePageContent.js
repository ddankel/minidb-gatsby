import React from "react";

import Miniature from "@/models/Miniature";

import { AttributeStack, DraftStatusBar, InfoStack } from "./MiniaturePageContent.styled";
import { ResponsiveContent, PhotoSection, InfoSection } from "./MiniaturePageContent.styled";

import Attribute from "../components/Attribute";
import Breadcrumbs from "../components/Breadcrumbs";
import Gallery from "../components/Gallery";
import Header from "../components/Header";
import Navigator from "../components/Navigator";
import Quantity from "../components/Quantity";
import Recipes from "../components/Recipes";
import Status from "../components/Status";
import TagList from "../components/TagList";
import Text from "../components/Text";

const MiniaturePageContent = ({ frontmatter, html }) => {
  const miniature = new Miniature({ frontmatter, html });

  return (
    <>
      <Navigator current={miniature.slug} />
      {miniature.isDraft && <DraftStatusBar />}
      <Breadcrumbs miniatureLines={miniature.lineArray} name={miniature.name} />

      <ResponsiveContent>
        <PhotoSection>
          <Gallery photos={miniature.photos} />
        </PhotoSection>

        <InfoSection>
          <Header title={miniature.name} />
          <InfoStack>
            <AttributeStack>
              <Status paintedAt={miniature.paintedAt} paintedState={miniature.paintedState} />
              <Attribute label="Tags">
                <TagList attribute="race" tags={miniature.raceTags} />
                <TagList attribute="archetype" tags={miniature.archetypeTags} />
                <TagList attribute="weapon" tags={miniature.weaponTags} />
                <TagList attribute="armor" tags={miniature.armorTags} />
              </Attribute>
              <Quantity count={miniature.quantity} />
            </AttributeStack>
            <Text>{html}</Text>
            <Recipes recipes={miniature.recipes} />
          </InfoStack>
        </InfoSection>
      </ResponsiveContent>

      {miniature.isDraft && <DraftStatusBar />}
    </>
  );
};
export default MiniaturePageContent;