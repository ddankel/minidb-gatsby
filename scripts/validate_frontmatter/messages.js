const chalk = require("chalk");

const scalarInsteadOfArray = ({ field, value }) => {
  return [
    chalk.keyword("orange")("non-array"),
    `value ${chalk.red(value)}`,
    `for array field ${chalk.whiteBright(field)}.`,
  ].join(" ");
};

const arrayInsteadOfScalar = ({ field, value }) => {
  return [
    chalk.keyword("orange")("array"),
    `value ${chalk.red(value)}`,
    `for scalar field ${chalk.whiteBright(field)}.`,
  ].join(" ");
};

const invalidValue = ({ field, value }) => {
  return [
    chalk.red("invalid"),
    `value ${chalk.red(value)}`,
    `for field ${chalk.whiteBright(field)}`,
  ].join(" ");
};

const invalidKey = ({ field, value }) => {
  return [
    chalk.red("invalid"),
    `field ${chalk.red(field)}`,
    `(value: ${chalk.whiteBright(value)})`,
  ].join(" ");
};

const deprecatedValue = ({ field, value }) => {
  return [
    chalk.yellow("deprecated"),
    `value ${chalk.yellow(value)}`,
    `for field ${chalk.whiteBright(field)}`,
  ].join(" ");
};

const deprecatedKey = ({ field, value }) => {
  return [
    chalk.yellow("deprecated"),
    `field ${chalk.whiteBright(field)}`,
    `(value: ${chalk.whiteBright(value)})`,
  ].join(" ");
};

module.exports = {
  scalarInsteadOfArray,
  arrayInsteadOfScalar,
  invalidValue,
  invalidKey,
  deprecatedValue,
  deprecatedKey,
};
