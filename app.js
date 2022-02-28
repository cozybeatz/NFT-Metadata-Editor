const fs = require("fs");
const { extname } = require("path/posix");

const folderName = "./metadata/";

let count = 0;
fs.readdirSync(folderName).forEach((file) => {
  // BASE NUMBER
  const baseNumber = 3200;
  // GET EXTENSION
  const extension = extname(file);
  // CREATE NEW FILE NAME
  const newFileName = Number(file.split(extension)[0]) + baseNumber;
  // FINAL FILE NAME WOTH EXTENSION
  const finalFileNameWithExtension = newFileName + extension;
  // RENAME FROM OLD FILE NAME TO NEW FILE NAME
  fs.rename(
    `${folderName}${file}`,
    `${folderName}${finalFileNameWithExtension}`,
    (err) => {
      if (err) return console.log(err);
      // LOG
      console.log(`File ${file} Renamed to ${finalFileNameWithExtension}`);
    }
  );
});
