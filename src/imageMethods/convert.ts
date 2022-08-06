import sharp, { AvailableFormatInfo, FormatEnum } from "sharp";

export const convert = async (
  image: string,
  format: keyof FormatEnum | AvailableFormatInfo,
  quality: number,
  outFileName: string
) => {
  sharp(image).toFormat(format, { quality }).toFile(`${outFileName}`);
};
