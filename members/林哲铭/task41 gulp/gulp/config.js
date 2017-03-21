//   gulp命令会由gulpfile.js运行，所以src和build文件夹路径如下（根目录下）
var src = './src';                  
var dest = './dist';               
module.exports = {
    html: {                            
        src: src + "/*.html",
        dest: dest + "/",
        settings: {              
            collapseWhitespace: true,
            removeComments:true
        }
    },
    css: {
        all: src + "/**/*.css",
        src: src + "/css/*.css",
        dest:dest + "/css",
        settings:{
        }
    },
    rjs:{
        src:src + "/js/*.js",
        dest:dest + "/js",
        settings:{

        }
    },
    img:{
        src:src + "/image/**/*.{png,jpg,gif,ico}",
        dest:dest + "/image",
        settings:{
            progressive: true
        }
    }
}