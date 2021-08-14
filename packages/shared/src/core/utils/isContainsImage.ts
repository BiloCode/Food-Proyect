function isContainsImage(files: FileList) {
  const iterableFiles = Array.from(files);
  const imagesFilesUpload = [];

  for (const file of iterableFiles) {
    const type = file.type.split("/")[0];
    if (type !== "image") {
      continue;
    }

    imagesFilesUpload.push(file);
  }

  return imagesFilesUpload;
}

export default isContainsImage;
