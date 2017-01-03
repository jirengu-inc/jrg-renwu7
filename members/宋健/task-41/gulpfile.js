var gulp = require('gulp');

//引入组件
var minhtml = require('gulp-htmlmin'),//html压缩
    mincss = require('gulp-minify-css'),//css压缩
    minimage = require('gulp-imagemin'),//图片压缩
    uglify = require('gulp-uglify'), //js压缩
    concat = require('gulp-concat'),//合并文件
    amdOptimize = require("amd-optimize"); //require优化


gulp.task('minhtml', function() {
    gulp.src('src/*.html')
        .pipe(minhtml({collapseWhitespace:true}))
        .pipe(gulp.dest('dist'));
});

gulp.task('mincss',function(){
   gulp.src('src/css/*')
       .pipe(mincss())
       .pipe(concat('merge.css'))
       .pipe(gulp.dest('dist/css'))
});

gulp.task('minimage',function(){
    gulp.src('src/img/**/*')
        .pipe(minimage())
        .pipe(gulp.dest('dist/img'))
});

gulp.task('rjs', function () {
    gulp.src('src/js/**/*.js')
        .pipe(amdOptimize('main',{paths: {
            "jquery": "lib/jquery"}
        }))
        .pipe(concat('index.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
});

gulp.task('watch', function () {
    gulp.watch('src/*.html', ['minhtml','mincss','minimage','rjs']);
});

gulp.task('default', ['minhtml', 'mincss','minimage','rjs','watch']);