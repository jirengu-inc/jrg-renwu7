var gulp = require("gulp"),
    cssmin = require("gulp-minify-css"),
    concat = require("gulp-concat");
var config = require('../config').css;

gulp.task("css",function () {
    return gulp.src(config.src)
        .pipe(concat("merge.min.css"))
        .pipe(cssmin(config.settings))
        .pipe(gulp.dest(config.dest));
});