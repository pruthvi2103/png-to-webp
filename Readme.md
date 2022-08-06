# Image Utils

A small util i used while making [antstack.com](https://www.antstack.com)

## What does it do and how to use?

It basically converts .png files to .webp [Read about Webp here](https://developers.google.com/speed/webp)

uses [Sharp](https://www.npmjs.com/package/sharp) to do all of its magic

### Setup:

install packages using your package manager

```
npm install
```

### Usage:

1. Add your .png images to the `inFiles` folder
2. in the [`index.ts`](src/index.ts) add your file name(s) in the array
3. run `npm run start`
4. Your .webp files will be in the `outDir` folder

### Tuning

- Directory and looping specific methods are present in [`index.ts`](src/index.ts)
- Sharp specific methods are in [`imageMethods/convert.ts`](src/imageMethods/convert.ts)

More to come!
