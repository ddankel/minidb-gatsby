// const { directoryImport } = require("directory-import");
import { directoryImport } from "directory-import";

const allImports = directoryImport("./data", (moduleName, modulePath, moduleData) => {
  console.log("--------------");
  console.log({ moduleName, modulePath, moduleData });
  console.log(moduleData.default as any);
});

console.log("=======");
console.log(allImports);
console.log("-");

Object.keys(allImports).forEach((key) => {
  console.log("key: ", key);
  console.log("imp: ", allImports[key]);
  Object.keys(allImports[key]).forEach((k) => {
    console.log("import key: ", k);
    console.log("data: ", allImports[key][k]);
  });
});
