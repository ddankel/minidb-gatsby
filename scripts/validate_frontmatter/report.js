const chalk = require("chalk");

/**
 * Class to manage validation results and error/warning messages
 */
class ValidationReport {
  #report;

  constructor() {
    this.errorCount = 0;
    this.warningCount = 0;
    this.#report = {};
  }

  addError(file, message) {
    this.errorCount++;
    this.#addResult(file, `${chalk.red("E")}  ${message}`);
  }

  addWarning(file, message) {
    this.warningCount++;
    this.#addResult(file, `${chalk.yellow("W")}  ${message}`);
  }

  getReport() {
    return this.#report;
  }

  /**
   * Print the error report to the console
   *
   * @example output
   *
   * /path_to/december-acolyte/december-acolyte.md
   *     E  invalid value crossbow for field weapons
   *     E  non-array value clothing for field armor.
   * /path_to/dark-elf-assassin-2/dark-elf-assassin-2.md
   *     W  deprecated value axe for field weapons
   * /path_to/gw-bright-wizard/bright-wizard.md
   *     E  invalid value sword for field weapons
   * /path_to/knight-of-the-chalice.md
   *     E  invalid value sword for field weapons
   *
   * Check complete. Found 4 error(s) and 1 warning(s)
   *
   */
  print() {
    for (const [key, value] of Object.entries(this.#report)) {
      console.log(key);
      value.forEach((item) => console.log("    " + item));
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
   * @param   {String}  file     The name of the file where the error/warning occured
   * @param   {String}  message  The error/warning message to add
   */
  #addResult(file, message) {
    if (!this.#report[file]) {
      return (this.#report[file] = [message]);
    }

    this.#report[file].push(message);
  }
}

module.exports = ValidationReport;
