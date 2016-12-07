module.exports = {
  context: __dirname,
  // This code will be compiled by webpack according to the babel specifications
  entry: "./src/app.js",
  // The plain compiled Javascript will be output into this file
  output: {
    filename: "public/bundle.js"
  },
  // This will be what we do
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_moduled|bower_components)/,
        loader: 'babel',
        query: {
          // These are the specific transformations we'll be using.
          presets: ['es2015'],
        }
      }
    ]
  }
}
