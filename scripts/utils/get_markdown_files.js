const fs = require("fs");
const path = require("path");

const getMarkdownFiles = (dirPath, fileList = []) => {
  const denyList = [".DS_Store"];
  const filesInDirectory = fs.readdirSync(dirPath);

  filesInDirectory.forEach((file) => {
    const filePath = path.join(dirPath, file);
    if (fs.statSync(filePath).isDirectory()) {
      getMarkdownFiles(filePath, fileList);
    } else {
      if (!denyList.includes(file) && path.extname(file).toLowerCase() === ".md") {
        fileList.push(filePath);
      }
    }
  });
  return fileList;
};

module.exports = getMarkdownFiles;
