/**
 * Copies assets from dependencies into public.
 */

module.exports = {
  templates: {
    files:[{
      expand: true,
      cwd: "src/templates",
      src: [
        "**/*"
      ],
      dest: "build/"
    }]
  },
  public: {
    files:[{
      expand: true,
      cwd: "src/public",
      src: [
        "**/*"
      ],
      dest: "build/"
    }]
  },
  img: {
    files:[{
      expand: true,
      cwd: "src/img",
      src: [
        "**/*"
      ],
      dest: "build/assets/img"
    }]
  },
  fonts: {
    files:[{
      expand: true,
      cwd: "src/fonts",
      src: [
        "**/*"
      ],
      dest: "build/assets/fonts"
    }]
  }
};
