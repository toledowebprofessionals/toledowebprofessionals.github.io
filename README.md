# toledowebprofessionals.github.io

Code repository for [https://toledowebprofessionals.com](https://toledowebprofessionals.com).

## Preparing the Environment

- **Install Node.js**: [Follow the instructions here](https://nodejs.org/en/download/) to install Node.js on your particular operating system.

- **Install Ruby**: [Follow the instructions here](https://www.ruby-lang.org/en/documentation/installation/) to install Ruby on your particular operating system.

- **Install Grunt**: Run `npm install -g grunt-cli`, or [follow the instructions](http://gruntjs.com/getting-started) here to install the Grunt CLI.

- **Install Bower**: Run `npm install -g bower`, or [follow the instructions here](http://bower.io/#install-bower) to install Bower.

- **Install Sass**: Run `gem install sass`, or [follow the instructions here](http://sass-lang.com/install) to install Sass.

- **Install SCSS Lint**: Run `gem install scss_lint`, or [follow the instructions here](https://github.com/brigade/scss-lint) to install SCSS Lint.

- **Install Jekyll**: Run `gem install jekyll`, or [follow the instructions here](http://jekyllrb.com/docs/quickstart/) to install Jekyll

**Warning for Windows Users**: You may have to restart after each installation step so that the PATH variable is properly updated, or update your PATH variable manually.

## Testing

- **NPM Install**: Run `npm install` in the project root to download and install the requisite Node packages.

- **Grunt**: Run `grunt` in your project root to run the default Grunt task and built the distributable files.

- **Server**: Run `grunt server` to start a server that uses the `build` directory as the web root.

- **Localhost**: Navigate your web browser to `http://localhost:9000/` to view the site.

- **Watcher**: Run `grunt watcher` to watch your files and rebuild the project as you edit them.

## Deploying

- **NPM Install**: Run `npm install` in the project root to download and install the requisite Node packages.

- **Grunt**: Run `grunt` in your project root to run the default Grunt task and built the distributable files.

- **Master**: Delete the files currently in the `master` branch and copy the files from the `build` directory in the `dev` branch to the `master` branch.
