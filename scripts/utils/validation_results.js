const chalk = require("chalk");

/**
 * Class to manage validation results and error/warning messages
 */
class ValidationResults {
  #report;

  constructor() {
    this.errorCount = 0;
    this.warningCount = 0;
    this.#report = {};
  }

  /** Add a "non-array-tag" error
   *
   * This error should be used if a metatag has a scalar value instead of an array
   *
   * @param   {String}  file   The name of the file where the error occured
   * @param   {String}  field  The frontmater field which contained the error
   * @param   {String}  value  The errant frontmatter value
   */
  addNonArrayTagError({ file, field, value }) {
    this.errorCount++;
    const msg =
      `    ${chalk.red("E")}  ${chalk.keyword("orange")("non-array")} ` +
      `value ${chalk.red(value)} ` +
      `for field ${chalk.whiteBright(field)}. `;

    this.#addReport({ file, msg });
  }

  /**
   * Add an "invalid tag" error
   *
   * This error should be used if a tag contains a value that is not valid
   *
   * @param   {String}  file   The name of the file where the error occured
   * @param   {String}  field  The frontmater field which contained the error
   * @param   {String}  value  The errant frontmatter value
   */
  addInvalidTagError({ file, field, value }) {
    this.errorCount++;

    const msg =
      `    ${chalk.red("E")}  ${chalk.red("invalid")} ` +
      `value ${chalk.red(value)} ` +
      `for field ${chalk.whiteBright(field)}`;

    this.#addReport({ file, msg });
  }

  /**
   * Add a 'deprecated value' warning
   *
   * This warning should be used if a frontmatter value is found that has been deprecated
   *
   * @param   {String}  file   The name of the file where the error occured
   * @param   {String}  field  The frontmater field which contained the error
   * @param   {String}  value  The errant frontmatter value
   */
  addDeprecationWarning({ file, field, value }) {
    this.warningCount++;

    const msg =
      `    ${chalk.yellow("W")}  ${chalk.yellow("deprecated")} ` +
      `value ${chalk.yellow(value)} ` +
      `for field ${chalk.whiteBright(field)}`;

    this.#addReport({ file, msg });
  }

  /**
   * Print the error report to the console
   *
   * @example output
   *
   * /Users/ddankel/dev/_dz/mini-db--gatsby/src/minis/december-acolyte/december-acolyte.md
   *     E  invalid value crossbow for field weapons
   *     E  non-array value clothing for field armor.
   * /Users/ddankel/dev/_dz/mini-db--gatsby/src/minis/gw/dark-elf-assassin-2/dark-elf-assassin-2.md
   *     W  deprecated value axe for field weapons
   * /Users/ddankel/dev/_dz/mini-db--gatsby/src/minis/gw/gw-bright-wizard/bright-wizard.md
   *     E  invalid value sword for field weapons
   * /Users/ddankel/dev/_dz/mini-db--gatsby/src/minis/wotc/knight-of-the-chalice.md
   *     E  invalid value sword for field weapons
   *
   * Check complete. Found 4 error(s) and 1 warning(s)
   *
   */
  printReport() {
    for (const [key, value] of Object.entries(this.#report)) {
      console.log(key);
      value.forEach((item) => console.log(item));
    }

    console.log();

    console.log(
      "Check complete.",
      `Found ${chalk.red(this.errorCount)} error(s)`,
      `and ${chalk.yellow(this.warningCount)} warning(s)`
    );
  }

  /****************************************************
   * PRIVATE METHODS
   */

  /**
   * Add an error report to the report object
   *
   * This method is used by the various error and warning adder methods
   *
   * @param   {String}  file  The name of the file where the error/warning occured
   * @param   {String}  msg   The error/warning message to add
   */
  #addReport({ file, msg }) {
    if (!this.#report[file]) {
      return (this.#report[file] = [msg]);
    }

    this.#report[file].push(msg);
  }
}

module.exports = ValidationResults;
