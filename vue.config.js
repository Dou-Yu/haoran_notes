/*const path = require("path");
const webpack = require("webpack");

function resolve(dir) {
    return path.join(__dirname, dir);
}*/

module.exports = {
  publicPath: "./",
  outputDir: "dist",
  devServer: {
    host: "localhost",
    port: 8000,
    open: true
  }

  /*  chainWebpack: config => {
      config.resolve.alias
        // key,value自行定义，比如.set('@assets', resolve('src/assets'))
        .set("vue$", "vue/dist/vue.esm.js")
        .set("@", resolve("src"))
        .set("vendor", path.resolve(__dirname, "src/vendor"))
    }*/

  /*    configureWebpack: {
          resolve: {
              extensions: ['.js', '.vue', '.json'],
              alias: {
                  // 'vue$': 'vue/dist/vue.esm.js',
                  '@': resolve('src'),
                  'vendor': path.resolve(__dirname, 'src/vendor') // 新增这⼀⾏
              }
          }
      }*/
};
