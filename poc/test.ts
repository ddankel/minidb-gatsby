import { promises } from "fs";
import path from "path";
import { fileURLToPath } from "url";

// const { directoryImport } = require("directory-import");
import { directoryImport } from "directory-import";

// import { foo } from "@miniature-collection/collection"
// import { foo } from "@diminutive-denizens/collection"
// import { foo } from "@dim-den/collection"
// import { foo } from "@mini-box/collection"
// import { foo } from "@minibox/collection"

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

/** import all images in dir example
 *
 * https://stackoverflow.com/questions/75909510/how-can-i-dynamically-import-all-image-files-in-a-folder-typescript
 *
 *
 *
 *
 */
// export const importAll = <T>(requireContext: __WebpackModuleApi.RequireContext) => {
//   const importedPictures: { default: T }[] = requireContext
//     .keys()
//     .filter((key) => key.match(/\.\//))
//     .map(requireContext) as { default: T }[];
//   return importedPictures.map((el) => el.default);
// };

// const images = importAll<HTMLImageElement>(require.context("./data", false, /\.(png|jpe?g|svg)$/));

// console.log(images);

// const ImageGallery = () => {
//   return (
//     <div>
//       {images.map((image, index) => (
//         <img key={index} src={image.src} alt={`Image ${index}`} />
//       ))}
//     </div>
//   )
// }

/*************** */

const test_v2 = async () => {
  const files = await promises.readdir("./poc/data", { recursive: true });

  console.log("files: ", files);
};

test_v2();
