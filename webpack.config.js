var path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');

var config = {
  /*
   * app.ts represents the entry point to your web application. Webpack will
   * recursively go through every "require" statement in app.ts and
   * efficiently build out the application's dependency tree.
   * 
   */
    context: path.join(__dirname, "src"),
  resolve: {
      // '.ts' and '.tsx' as resolvable extensions.
      extensions: ['', '.js', '.ts', '.tsx']
  },
   entry: [
    './app.tsx'
  ],

  /*
   * The combination of path and filename tells Webpack what name to give to
   * the final bundled JavaScript file and where to store this file.
   */
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  devServer: {
    contentBase: './dist', //Content base
    inline: true, //Enable watch and live reload
    host: 'localhost',
    port: 8080,
    stats: 'errors-only',
    directoryListing: true,
    open: true
  },
  /*
   * resolve lets Webpack now in advance what file extensions you plan on
   * "require"ing into the web application, and allows you to drop them
   * in your code.
   */
  resolve: {
    extensions: ["", ".ts", ".tsx", ".js"]
  },

  module: {
    /*
     * Each loader needs an associated Regex test that goes through each
     * of the files you've included (or in this case, all files but the
     * ones in the excluded directories) and finds all files that pass
     * the test. Then it will apply the loader to that file. I haven't
     * installed ts-loader yet, but will do that shortly.
     */
    loaders: [
      {
         test: /\.(ts|tsx)$/,
        loader: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
    plugins:[
    new HtmlWebpackPlugin({
      filename: 'index.html', //Name of file in ./dist/
      template: 'index.html' //Name of template in ./src
    })
  ]
};

module.exports = config;