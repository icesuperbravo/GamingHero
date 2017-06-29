#1. CSS Units
* em-----Relative to the font-size of the element (2em means 2 times the size of the current font) Try it
* ex-----Relative to the x-height of the current font (rarely used) Try it
* ch-----Relative to width of the "0" (zero)
* rem-----Relative to font-size of the root element
* vw-----Relative to 1% of the width of the viewport* Try it
* vh-----Relative to 1% of the height of the viewport* Try it
* vmin-----Relative to 1% of viewport's* smaller dimension Try it
* vmax-----Relative to 1% of viewport's* larger dimension
#2. Configure Sass in React Application
* Run `npm install sass-loader style-loader css-loader` in the command line;  
* Configure your loader in webpack.config.js like this way:  
~~~~
 {
                test: /\.scss$/,
                include: SRC_DIR,
                loader: ["style-loader", "css-loader","sass-loader"]
  }
~~~~
* Add the main.scss in App.js(The index js file) like `import path/main.scss`;

