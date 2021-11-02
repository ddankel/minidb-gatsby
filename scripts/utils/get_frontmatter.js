const fs = require("fs");
const fm = require("front-matter");

const getFrontmatter = (file) => fm(fs.readFileSync(file, "utf8")).attributes;

module.exports = getFrontmatter;
