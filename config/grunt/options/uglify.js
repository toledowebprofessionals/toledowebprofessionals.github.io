/**
 * Concatenates and uglifies javascript.
 */

module.exports = {
  options: {
    separator: ";\n",
    sourceMap: false,
    compress: false
  },
  src: {
    files: {
      "build/assets/js/twp.min.js": [
        "src/js/**/*.js"
      ]
    }
  },
  vendor: {
    files: {
      "build/assets/js/vendor.min.js": [
      ]
    }
  }
};
