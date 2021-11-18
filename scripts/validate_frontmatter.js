const fmSchema = require("./validate_frontmatter/frontmatter_schema");
const path = require("path");
const getMarkdownFiles = require("./utils/get_markdown_files");
const ValidationReport = require("./validate_frontmatter/report");
const messages = require("./validate_frontmatter/messages");

const getFrontmatter = require("./utils/get_frontmatter");
const miniPath = path.join(__dirname, "../src/minis");

const report = new ValidationReport();

/**
 * Validate that there are no unexpected keys in the frontmatter
 */
const validateKeys = (file, fmSchema) => {
  const fm = getFrontmatter(file);
  const fmKeys = Object.keys(fm);
  const schemaKeys = fmSchema.map((item) => item.key);
  const extraFmKeys = fmKeys.filter((i) => !schemaKeys.includes(i));
  if (extraFmKeys.length) {
    extraFmKeys.forEach((key) => {
      report.addError(file, messages.invalidKey({ field: key, value: fm[key] }));
    });
  }
};

/**
 * Validate the specified array field
 */
const validateArrayField = (file, schema) => {
  const fm = getFrontmatter(file);
  const { key, required = true, deprecated = false } = schema;
  const values = fm[key];

  if (required && !values) {
    return report.addError(file, messages.invalidValue({ field: key, value: values }));
  }

  if (values === undefined) return;

  if (!(values instanceof Array)) {
    return report.addError(file, messages.scalarInsteadOfArray({ field: key, value: values }));
  }

  values.forEach((v) => {
    if (deprecated) {
      report.addWarning(file, messages.deprecatedKey({ field: key, value: values }));
    }
    if (schema.deprecatedValues && schema.deprecatedValues.includes(v)) {
      report.addWarning(file, messages.deprecatedValue({ field: key, value: v }));
    }
    if (schema.values && !schema.values.includes(v)) {
      report.addError(file, messages.invalidValue({ field: key, value: v }));
    }
    if (schema.validate && !schema.validate(v)) {
      report.addError(file, messages.invalidValue({ field: key, value: v }));
    }
  });
};

/**
 * Validate the specified scalar field
 */
const validateScalarField = (file, schema) => {
  const fm = getFrontmatter(file);
  const { key, required = true, deprecated = false } = schema;
  const value = fm[key];

  if (required && !value) {
    return report.addError(file, messages.invalidValue({ field: key, value }));
  }

  if (value instanceof Array) {
    return report.addError(file, messages.arrayInsteadOfScalar({ field: key, value }));
  }

  if (deprecated) {
    report.addWarning(file, messages.deprecatedKey({ field: key, value }));
  }

  if (schema.deprecatedValues && schema.deprecatedValues.includes(v)) {
    report.addWarning(file, messages.deprecatedValue({ field: key, value }));
  }

  if (schema.values && !schema.values.includes(value)) {
    report.addError(file, messages.invalidValue({ field: key, value }));
  }

  if (schema.validate && !schema.validate(value)) {
    report.addError(file, messages.invalidValue({ field: key, value }));
  }
};

/**
 * Process each markdown file and validate its frontmatter
 */
getMarkdownFiles(miniPath).forEach((file) => {
  validateKeys(file, fmSchema);

  // Validate Defined Attributes
  fmSchema.forEach((schema) => {
    switch (schema.type.toLocaleLowerCase()) {
      case "array":
        validateArrayField(file, schema);
        break;
      case "scalar":
        validateScalarField(file, schema);
        break;
      default:
        throw new Error(`Invalid type for schema '${schema.key}'`);
    }
  });
});

report.print();
