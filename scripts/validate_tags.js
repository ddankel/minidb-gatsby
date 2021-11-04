const path = require("path");

const getFrontmatter = require("./utils/get_frontmatter");
const getMarkdownFiles = require("./utils/get_markdown_files");
const ValidationResults = require("./utils/validation_results");
const {
  arrayFields,
  scalarFields,
  deprecatedFields,
  invalidValues,
  validValues,
  deprecatedValues,
} = require("./utils/validation_config");

const miniPath = path.join(__dirname, "../src/minis");
const validationResults = new ValidationResults();

/**
 * Validate the specified array frontmatter field on the provided file
 *
 * - Adds an error if the value isn't an array
 * - Adds an error if any of the array's contents aren't in the valid tags list
 * - Adds a warning if any of the array's contents are in the deprecated tags list
 *
 * @param   {String}  file   Path to the file to be validated
 * @param   {String}  field  Name of the field to be validated
 */
const validateArrayField = ({ file, field }) => {
  const frontmatter = getFrontmatter(file);
  const valuesArray = frontmatter[field];

  if (valuesArray instanceof Array) {
    valuesArray.forEach((value) => {
      if (deprecatedValues[field] && deprecatedValues[field].includes(value)) {
        validationResults.addDeprecationWarning({ file, field, value });
      } else if (validValues[field] && !validValues[field].includes(value)) {
        validationResults.addInvalidTagError({ file, field, value });
      }
    });
  } else {
    validationResults.addNonArrayTagError({ file, field, value: frontmatter[field] });
  }
};

/**
 * Validate the specified scalar frontmatter field on the provided file
 *
 * - Adds an error if the value is an array
 * - Adds an error if the field's contents aren't in the valid tags list
 * - Adds a warning if the field's contents are in the deprecated tags list
 *
 * @param   {String}  file   Path to the file to be validated
 * @param   {String}  field  Name of the field to be validated
 */
const validateScalarField = ({ file, field }) => {
  const frontmatter = getFrontmatter(file);
  const value = frontmatter[field];

  if (deprecatedValues[field] && deprecatedValues[field].includes(value)) {
    validationResults.addDeprecationWarning({ file, field, value });
  } else if (validValues[field] && !validValues[field].includes(value)) {
    validationResults.addInvalidTagError({ file, field, value });
  } else if (invalidValues[field] && invalidValues[field].includes(value)) {
    validationResults.addInvalidTagError({ file, field, value });
  }
};

/**
 * Validate the specified deprecared field doesn't appear on the file
 *
 * @param   {String}  file   Path to the file to be validated
 * @param   {String}  field  Name of the field to be validated
 */
const validateDeprecatedField = ({ file, field }) => {
  const frontmatter = getFrontmatter(file);
  const value = frontmatter[field];

  if (frontmatter.hasOwnProperty(field)) {
    // if (deprecatedFields.includes(field)) {
    validationResults.addFieldDeprecationWarning({ file, field, value });
  }
};

/**
 * Validate that the photos are relative paths begining with .
 *
 * Valid photo values are ./<image name> or ../<path to missing-image.png>
 */
const validatePhotosField = (file) => {
  const frontmatter = getFrontmatter(file);
  const valuesArray = frontmatter.photos;

  if (valuesArray instanceof Array) {
    valuesArray.forEach((value) => {
      if (!value.startsWith(".")) {
        validationResults.addInvalidTagError({ file, field: "photos", value });
      }
    });
  } else {
    validationResults.addNonArrayTagError({ file, field: "photos", value: valuesArray });
  }
};

/**
 * Perform the validation
 *
 * For each markdown file in the specified path, run both validation methods.
 */
getMarkdownFiles(miniPath).forEach((file) => {
  deprecatedFields.forEach((field) => validateDeprecatedField({ file, field }));
  scalarFields.forEach((field) => validateScalarField({ file, field }));
  arrayFields.forEach((field) => validateArrayField({ file, field }));
  validatePhotosField(file);
});

validationResults.printReport();
