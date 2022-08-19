import createImageUrlBuilder from "@sanity/image-url";

import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: "eff8r9bc",
  dataset: "production",
  apiVersion: "2021-03-25",
  token:
    "skYWB2wEGMde4hJvas5SZoatWtm0m7b4ewkSjcuGN5nIm2xsOS7JPmhBubV0aSyUXUPkaE7qAw9w2MW9AAsXxJHC7cZcbgHHhJBquVwyDS0EXCvocaordvlUXlxufxsNhwWDdbzITTFpxpRBby07TgYnFVSFB2DFOGEmeA4qClxhouu6xDOR",
  useCdn: false, // `false` if you want to ensure fresh data
});
