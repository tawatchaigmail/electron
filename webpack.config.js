const path = require("path");
const webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
 // entry: "./app/index.js",
  entry: "./app-reduc/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "build"),
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "build"),
    },
    port: 3000,
  },

  plugins: [
  //  new CleanWebpackPlugin(['build']),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
    //  template: path.join(__dirname, "src", "index_template.html"),
      template: path.join(__dirname, "app-reduc", "index.html"), 
    }),
       // Work around for Buffer is undefined:
       // https://github.com/webpack/changelog-v5/issues/10
    
    new webpack.ProvidePlugin({
            Buffer: ['buffer', 'Buffer'],
    }),
    
        
    new webpack.ProvidePlugin({
            process: 'process/browser',
    }),

    new webpack.ProvidePlugin({
      "React": "react",
    }),
        
  ],


 module: {
    // exclude node_modules
    rules: [

      {
        test: /\.css$/i,
        exclude: /\.lazy\.css$/i,
        use: ["style-loader", "css-loader"],
      },

      {
        test: /\.(js|jsx)$/, 
        exclude: /node_modules/,        
        use: [ 
       // ["babel-loader"]
          
          { loader:  "babel-loader"  ,
          
                   options: { presets: ['@babel/preset-env', '@babel/preset-react'], 
                              plugins: ["react-hot-loader/babel"], 
                            }
          },
                     
        ],
      },

      {
        test: /\.scss$/,
        exclude: /(node_modules)/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' },
        ],
       },
       {
        test: /\.png$/,
        exclude: /(node_modules)/,
        use: [
          { loader: 'file-loader' },
        ],
       },

    ],
  },

  // pass all js files through Babel
  resolve: {    
    extensions: ["*", ".js",".jsx" ],
    
    fallback: {
            "stream": require.resolve("stream-browserify"),
            "buffer": require.resolve("buffer")
        },    
    
  },

};
