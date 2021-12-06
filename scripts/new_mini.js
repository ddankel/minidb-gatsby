const fs = require("fs");
const path = require("path");

const draftDir = "./src/mini_drafts/";
const templateFile = path.join(draftDir, "miniature-template.md");

const createTemplate = (slug) => {
  const newSlug = path.parse(slug).name;
  const newPath = path.join(draftDir, newSlug);
  const newMarkdownFile = path.join(newPath, `${newSlug}.md`);

  console.log(`Creating template for '${newSlug}'`);
  if (!fs.existsSync(newPath)) {
    console.log("    creating directory...");
    fs.mkdirSync(newPath);
  }

  if (fs.existsSync(newMarkdownFile)) {
    return console.log("    WARNING: .md file already exists.  Skipping.");
  }

  // Write new markdown file, but pre-set the slug frontmatter value
  console.log("    creating .md file...");
  const data = fs.readFileSync(templateFile, "utf-8");
  const newData = data.replace(new RegExp("miniature-template", "g"), newSlug);
  fs.writeFileSync(newMarkdownFile, newData, "utf-8");
};

const args = process.argv.slice(2);

if (!args.length) {
  console.log("You must specify the new miniature slugs as arguments");
  console.log("Examples:");
  console.log("  npm run new single-miniature");
  console.log("  npm run new first-mini second-mini third-mini");
  return;
}

if (!fs.existsSync(templateFile)) {
  return console.log(`Template file (${templateFile}) is missing.`);
}

args.forEach((item) => createTemplate(item));

console.log("Processing complete.  The new files are in", draftDir);
