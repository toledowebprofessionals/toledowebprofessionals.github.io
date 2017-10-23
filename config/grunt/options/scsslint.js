/**
 * Lints .scss files.
 */

module.exports = {
  src: [
    "src/scss/**/*.scss"
  ],
  options: {
    config: "config/build/scsslint.yml",
    colorizeOutput: true,
    maxBuffer: 3000 * 1024
  }
};
