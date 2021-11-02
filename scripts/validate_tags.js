const path = require("path");

const getFrontmatter = require("./utils/get_frontmatter");
const getMarkdownFiles = require("./utils/get_markdown_files");
const { validTags, deprecatedTags } = require("./utils/tag_list");
const ValidationResults = require("./utils/validation_results");

const miniPath = path.join(__dirname, "../src/minis");
const checkableAttributes = Object.keys(validTags);
const validationResults = new ValidationResults();

getMarkdownFiles(miniPath).forEach((file) => {
  const frontmatter = getFrontmatter(file);

  // Loop through each checkable frontmatter tab
  checkableAttributes.forEach((attr) => {
    // Ensure the tag's value is an array... no scalars
    if (!(frontmatter[attr] instanceof Array)) {
      validationResults.addNonArrayTagError({ file, field: attr, value: frontmatter[attr] });
    } else {
      // Compare the tag values to the deprecated and valid lists
      frontmatter[attr].forEach((attrValue) => {
        if (deprecatedTags[attr] && deprecatedTags[attr].includes(attrValue)) {
          validationResults.addDeprecationWarning({ file, field: attr, value: attrValue });
        } else if (validTags[attr] && !validTags[attr].includes(attrValue)) {
          validationResults.addInvalidTagError({ file, field: attr, value: attrValue });
        }
      });
    }
  });
});

validationResults.printReport();
