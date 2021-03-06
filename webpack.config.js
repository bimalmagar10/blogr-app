const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry:[
	__dirname + '/src/js/index.js',
	__dirname + '/src/sass/main.scss'
	],
	output:{
		path:path.resolve(__dirname,"dist"),
		filename:"js/bundle.js"
	},
	mode:"development",
	devServer:{
		contentBase:"./dist"
	},
	module:{
		rules:[
		    {
		    	test:/\.js$/,
		    	exclude:/node_modules/,
		    	use:"babel-loader"
		    },
			{
				test:/\.scss$/,
				exclude:/node_modules/,
				use:[
					{
						loader:"file-loader",
						options:{outputPath:"css/",name:"main.css",}
					},
					"sass-loader",
				],
			},
		],
	},
	plugins:[
        new HTMLWebpackPlugin({
        	filename:"index.html",
        	template:"./src/index.html"
        }),
	]
}; 