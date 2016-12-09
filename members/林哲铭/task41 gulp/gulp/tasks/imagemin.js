//添加依赖的模块
var gulp = require('gulp');
var imagemin = require("gulp-imagemin");
var config = require('../config').img;
//gulp的语法命令及待办事项
gulp.task('img', function(){
    return gulp.src(config.src)
        .pipe(imagemin(config.settings))
        .pipe(gulp.dest(config.dest))
});