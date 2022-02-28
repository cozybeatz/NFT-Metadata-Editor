const fs = require("fs");
const { extname } = require("path");

const folderName = "./metadata/";
// METADATA CONTENT
let metadataContent = [];
let count = 0;
fs.readdirSync(folderName).forEach((file) => {
  // FILE CONTENTS
  //   console.log(file);
  count++;
  console.log(count, file);
  const content = fs.readFileSync(`${folderName}${file}`, "utf8");
  // PARSE JSON CONTENT
  const ObjectifiedContent = JSON.parse(content);
  // PUSH CONTENT INTO ARRAY
  metadataContent.push(ObjectifiedContent);
});

Promise.all(metadataContent).then((values) => {
  // sort array of values
  values.sort((a, b) => {
    return a.edition - b.edition;
  });
  const data = JSON.stringify(values, null, "\t");

  fs.writeFileSync("_metadata.json", data);

  console.log(`Written singular file contents to _metadata.json`);
});
