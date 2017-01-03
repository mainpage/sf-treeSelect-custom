module.exports =  {
    entry: {
        sfTreeSelect: "./src/treeSelect.vue"
    },
    output: {
        path: "./docs",
        filename: "[name].js",
        library : '[name]'
    },
	//devtool: "source-map",
    resolve:{
        extensions: ['', '.js', '.vue']
    },
    module: {
        loaders: [
            {test: /.vue/, loader: 'vue'},
            /*{test: /\.js$/, loader: 'babel', exclude: /node_modules/},*/
            {test: /.html/, loader: 'html'},
			{test: /.scss$/,  loader: "style!css!sass" }
        ]
    },
    babel: {
        presets: ['es2015'],
        plugins: ["transform-vue-jsx"]
    }
}