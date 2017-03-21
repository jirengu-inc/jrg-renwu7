
var gulp = require("gulp");
var less = require('gulp-less');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('less', function () {
  return gulp.src('./less/**/*.less')
    .pipe(less())
    .pipe(autoprefixer({
    	browsers: ['not ie <= 8','Firefox <= 20'],
    	cascade: false
    }))
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('css', () =>
    gulp.src('css/css3.css')
        .pipe(autoprefixer({
            browsers: ['not ie <= 8','Firefox <= 20'],
            cascade: false
        }))
        .pipe(gulp.dest('./dist/css'))
);
gulp.task("all",["less","css"])