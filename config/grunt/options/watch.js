/**
 * Watches specified files and runs the appropriate task when they're changed.
 */

module.exports = {
  img: {
    files: ['src/img/**/*'],
    tasks: ['img']
  },
  js: {
    files: ['src/js/**/*'],
    tasks: ['js']
  },
  scss: {
    files: ['src/scss/**/*'],
    tasks: ['css']
  },
  templates: {
    files: ['src/templates/**/*'],
    tasks: ['templates']
  },
  public: {
    files: ['src/public/**/*'],
    tasks: ['public']
  },
  fonts: {
    files: ['src/fonts/**/*'],
    tasks: ['fonts']
  }
};
