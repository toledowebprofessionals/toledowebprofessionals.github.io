/**
 * Compiles .scss files.
 */

module.exports = {
  options: {
    sourceMap: false,
    outputStyle: "compressed"
  },
  src: {
    files: {
      "build/assets/css/twp.min.css" : "src/scss/init.scss"
    }
  }
};
