/**
 * Post processor for automatically adding browser prefixes.
 */

module.exports = {
  options: {
    map: false,
    processors: [
      require("autoprefixer")({
        browsers: ["last 2 versions"]
      })
    ]
  },
  assets: {
    src: [
      "build/assets/css/twp.min.css"
    ]
  }
};
