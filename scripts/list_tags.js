const path = require("path");
const getMarkdownFiles = require("./utils/get_markdown_files");
const getFrontmatter = require("./utils/get_frontmatter");

const miniPath = path.join(__dirname, "../src/minis");
const indexableAttributes = ["weapons", "armor", "race"];
const aggregatableAttributes = ["line"];
const attributeIndex = {};

getMarkdownFiles(miniPath).forEach((file) => {
  const frontmatter = getFrontmatter(file);
  indexableAttributes.forEach((i) => {
    if (!attributeIndex[i]) attributeIndex[i] = [];
    attributeIndex[i] = [...new Set([...attributeIndex[i], ...frontmatter[i]])].sort();
  });
  aggregatableAttributes.forEach((i) => {
    if (!attributeIndex[i]) attributeIndex[i] = [];
    attributeIndex[i] = [...new Set([...attributeIndex[i], frontmatter[i].join(" > ")])].sort();
  });
});

console.log(attributeIndex);
