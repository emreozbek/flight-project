const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = (env, args) => {
  const plugins = [];
  if (args.mode === "production") {
    plugins.push(new UglifyJsPlugin());
  }
  return {
    entry: "./src/index.jsx",
    output: {
      path: __dirname + "/build",
      filename: "bundle.js"
    },
    resolve: {
      extensions: [".js", ".jsx", ".scss"]
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"],
              plugins: [
                "@babel/plugin-transform-runtime",
                "@babel/plugin-proposal-class-properties",
                "@babel/plugin-transform-arrow-functions",
                "@babel/plugin-transform-classes"
              ]
            }
          }
        },
        {
          test: /\.(css|scss)$/,
          use: ["style-loader", "css-loader", "sass-loader"]
        }
      ]
    },
    devServer: {
      contentBase: "./build",
      hot: true,
      port: 4000,
      historyApiFallback: true,
      disableHostCheck: true,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods":
          "GET, POST, PUT, DELETE, PATCH, OPTIONS",
        "Access-Control-Allow-Headers":
          "X-Requested-With, content-type, Authorization"
      }
    },
    plugins
  };
};
