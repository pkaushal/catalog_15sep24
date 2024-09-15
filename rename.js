const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'originals');

fs.readdir(directoryPath, (err, files) => {
  if (err) {
    return console.log('Unable to scan directory: ' + err);
  }

  let imageIndex = 1;

  files.forEach((file, index) => {
    const fileExtension = path.extname(file);
    const newFileName = `image${imageIndex}${fileExtension}`;
    const oldFilePath = path.join(directoryPath, file);
    const newFilePath = path.join(directoryPath, newFileName);

    fs.rename(oldFilePath, newFilePath, (err) => {
      if (err) {
        console.log('Error renaming file: ' + err);
      } else {
        console.log(`Renamed ${file} to ${newFileName}`);
      }
    });

    imageIndex++;
  });
});