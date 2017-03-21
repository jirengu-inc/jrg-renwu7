var gulp = require('gulp');

// 引入组件
var minifycss = require('gulp-minify-css'), //压缩CSS
	uglify = require('gulp-uglify'), //压缩js
	minhtml = require('gulp-htmlmin'), //压缩html
	// jshint = require('gulp-jshint'), //检查js代码的规范性
	imagemin = require('gulp-imagemin'), //压缩图片
	concat = require('gulp-concat'), //合并文件
	rename = require('gulp-rename'), //重命名
	// clean = require('gulp-clean'); //清空文件夹
	amdOptimize = require('amd-optimize'); //优化requirejs

	gulp.task('html', function(){
		return gulp.src('src/*.html')
			.pipe(minhtml({collapseWhitespace: true}))
			.pipe(gulp.dest('dist'));
	});

	gulp.task('css', function(argument){
		gulp.src('src/css/*.css')
			.pipe(concat('merge.css'))
			.pipe(minifycss())
			.pipe(gulp.dest('dist/css/'))
	});

	gulp.task('js',function(){
		gulp.src('src/js/**/*.js')
			.pipe(amdOptimize('main',{paths:{'jquery': 'lib/jquery.min'}}))
			.pipe(concat('index.js'))
			.pipe(uglify())
			.pipe(gulp.dest('dist/js'))
	});

    gulp.task('img',function(argument){
    gulp.src('src/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'))
    });


	gulp.task('watch', function () {
	    gulp.watch('src/*.html', ['minhtml','minifycss','imagemin','js']);
	});

	gulp.task('default', ['html','css','img', 'js','watch']);
