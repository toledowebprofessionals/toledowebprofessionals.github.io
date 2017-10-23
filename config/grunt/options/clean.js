/**
 * Deletes all files and directories as specified.
 */

module.exports = {
  templates: [
    "build/index.html"
  ],
  public: [
    "build/browserconfig.xml",
    "build/humans.txt",
    "build/index.php",
    "build/robots.txt",
    "build/CNAME"
  ],
  css: [
    "build/assets/css/"
  ],
  js: [
    "build/assets/js"
  ],
  img: [
    "build/assets/img"
  ],
  fonts: [
    "build/assets/fonts"
  ]
};
