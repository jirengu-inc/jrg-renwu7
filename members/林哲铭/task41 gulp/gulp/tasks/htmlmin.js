var gulp = require('gulp');
var htmlmin = require("gulp-htmlmin");
var config = require('../config').html;

gulp.task('html', function(){
    return gulp.src(config.src)
        .pipe(htmlmin(config.settings))
        .pipe(gulp.dest(config.dest))
});