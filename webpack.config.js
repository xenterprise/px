var webpack = require("webpack");
var pth = require("path");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js",
        publicPath: '/'
    },
    devServer: {
        inline: true,
        historyApiFallback: true,
        contentBase: './dist',
        port: 3000
    },
    module: {
        rules: [
            { 
                test: /\.js$/,
                exclude: /(node_modules)/, 
                use: 'babel-loader' 
            }
            ,
            {   test: /\.css$/,  
                use: ['style-loader','css-loader'] 
            },
            {   test: /\.scss$/,  
                use: ['style-loader','css-loader','sass-loader'] 
            }
            
        ]
      }
}