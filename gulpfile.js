// https://github.com/coderhaoxin/gulp-file-include

var gulp = require('gulp'),
fileinclude = require('gulp-file-include');

gulp.task('fileinclude', function(){
	gulp.src('./origin/html/**.html')
		.pipe(fileinclude({
			prefix: '@@',
			basepath: '@file'
		}))
		.pipe(gulp.dest('asset/'));
});