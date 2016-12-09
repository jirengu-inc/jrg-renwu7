var gulp = require("gulp");
var amdOptimize = require("amd-optimize");
var concat = require("gulp-concat");
var config = require('../config').rjs;

gulp.task("rjs",function () {
    return gulp.src(config.src)
        .pipe(amdOptimize("main"))
        .pipe(concat("index.merge.min.js"))
        .pipe(gulp.dest(config.dest));
});