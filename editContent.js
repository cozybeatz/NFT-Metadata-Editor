const fs = require("fs");
const { extname } = require("path");

const folderName = "./metadata/";
fs.readdirSync(folderName).forEach((file) => {
  const content = fs.readFileSync(`${folderName}${file}`, "utf8");
  // PARSE JSON CONTENT
  const ObjectifiedContent = JSON.parse(content);
  // GET FILE EXTENSION
  const extension = extname(file);
  // FILE NAME
  const name = file.split(extension)[0];
  // SET NAME IN METADATA FILE
  ObjectifiedContent.name = `COMRADE #${name}`;
  // SET EDITION IN METADATA FILE
  ObjectifiedContent.edition = Number(name);
  // STRINGIFY OBJECT AND SAVE TO VARIABLE
  const data = JSON.stringify(ObjectifiedContent, null, "\t");
  // WRITE FILE
  fs.writeFileSync(`${folderName}${file}`, data);
  // LOG
  console.log(`File written successfully to ${file}\n`);
});
