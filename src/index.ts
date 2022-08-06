import { convert } from "./imageMethods/convert";
import path from "path";

const getImgPath = (fileName: string) =>
  path.join(__dirname, "..", "inFiles", fileName);
const outPath = path.join(__dirname, "..", "outFiles");

const convertFileToWebp = (fileName: string) => {
  convert(
    getImgPath(`${fileName}.png`),
    "webp",
    100,
    `${outPath}/${fileName}.webp`
  );
};

const fileNames = ["input"]; // Replace with your file names

fileNames.forEach((fileName) => convertFileToWebp(fileName));
