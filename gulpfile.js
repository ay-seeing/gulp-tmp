// https://github.com/coderhaoxin/gulp-file-include

var gulp = require('gulp'),
fileinclude = require('gulp-file-include'),
clean = require('gulp-clean');

var paths = {
	origin: './origin/html/**.html',
	dest: './asset'
}

gulp.task('fileinclude', function(){
	gulp.src(paths.origin)
		.pipe(fileinclude({
			prefix: '@@',
			basepath: '@file'
		}))
		.pipe(gulp.dest(paths.dest));
});

gulp.task('clean', function(){
	gulp.src(paths.dest)
		.pipe(clean({force: true}));
});

gulp.task('watch', function(){
	gulp.watch(paths.origin, ['fileinclude']);
});

gulp.task('default', ['watch', 'fileinclude'])