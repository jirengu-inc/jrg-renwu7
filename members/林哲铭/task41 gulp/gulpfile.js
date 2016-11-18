var gulp = require('gulp');

//组件
var htmlmin = require("gulp-htmlmin"),
    cssmin = require("gulp-minify-css"),
    concat = require("gulp-concat");

gulp.task('html', function() {
   return gulp.src('src/*.html')
       .pipe(htmlmin({collapseWhitespace: true}))
       .pipe(gulp.dest('dist'));
});
gulp.task("css",function () {
   return gulp.src("src/*.css")
       .pipe(concat("src/css/*.css"))
       .pipe(cssmin())
       .pipe(gulp.dest('dist/css'));
});