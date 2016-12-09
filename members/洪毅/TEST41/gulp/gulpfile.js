var gulp=require('gulp');
var minhtml = require('gulp-htmlmin');
var minifycss=require('gulp-minify-css');
var uglify=require('gulp-uglify');
var concat=require('gulp-concat');
var imagemin=require('gulp-imagemin')
//var jshint=require('gulp-jshint');

    gulp.task('html', function () {
        return gulp.src('src/*.html')
            .pipe(minhtml({collapseWhitespace: true}))
            .pipe(gulp.dest('dist'));
    });
    gulp.task('css',function(argument){
        gulp.src('src/css/*.css')
            .pipe(concat('merge.min.css'))
            .pipe(minifycss())
            .pipe(gulp.dest('dist/css/'))
    });
    gulp.task('js',function(argument){
        gulp.src('src/js/*.js')
            .pipe(concat('merge.js'))
            .pipe(uglify())
            .pipe(gulp.dest('dist/js/'))
    });
    gulp.task('img',function(argument){
        gulp.src('src/img/*')
            .pipe(imagemin())
            .pipe(gulp.dest('dist/img'))
    });
gulp.task('default',['html','css']);