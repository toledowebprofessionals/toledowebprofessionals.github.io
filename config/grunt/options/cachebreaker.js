/**
 * Searches headers/footers and appends a timestamp to style/script includes forcing the
 * browser to reload those resources
 */

module.exports = {
  css: {
    options: {
      match: [
        "vendor.min.css",
        "twp.min.css"
      ],
      position: "append"
    },
    files: {
      src: [
        "build/index.html"
      ]
    }
  },
  js: {
    options: {
      match: [
        "vendor.min.js",
        "twp.min.js"
      ],
      position: "append"
    },
    files: {
      src: [
        "build/index.html"
      ]
    }
  }
};
