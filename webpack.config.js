const path = require("path");
//引入html插件
const HTMLWebpackPlugin = require('html-webpack-plugin')
//引入clean插件
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

//webpack中的所有配置信息都写在 module.exports中
module.exports = {
    optimization:{
        minimize: false // 关闭代码压缩，可选
    },

    //指定路口文件
    entry: "./src/index.ts",
    
    //指定打包文件所在目录
    output: {
        //指定打包文件的目录
        path: path.resolve(__dirname, "dist"),
        //打包后的文件
        filename: "bundle.js",
        environment: {
            arrowFunction: false // 关闭webpack的箭头函数，可选
        }
    },

    //指定webpack打包时要使用的模块
    module: {
        //指定要加载的规则
        rules: [
            {
                //test指定的是规则生效的文件
                test: /\.ts$/,
                //要使用的loader
                use: [
                    //配置babel
                    {
                        //指定加载器
                        loader:"babel-loader",
                        //设置
                        options:{
                            //设置预定义的环境
                            presets: [
                                [
                                    //指定环境的插件
                                    "@babel/preset-env",
                                    //配置信息
                                    {
                                        //要兼容的目标浏览器
                                        "targets":{
                                            "chrome": "88"
                                        },
                                        //指定code.js的版本
                                        "corejs":"3",
                                        //使用codejs的方法 usage:表示按需加载
                                        "useBuiltIns": "usage"
                                    }
                                ]
                            ]
                        }
                    },
                    "ts-loader"     
                ],
                //要排除的文件
                exclude: /node_modules/
            },
            // 设置less文件 的处理
            {
                test:/\.less$/,
                use:[
                    "style-loader",
                    "css-loader",
                    "less-loader"
                ]
            }
        ]
    },

    //配置webpack插件
    plugins: [
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({
            template: "./src/index.html"
        }),
    ],

    //用来设置引用模块
    resolve: {
        extensions: [".ts", ".js"]
    },
}