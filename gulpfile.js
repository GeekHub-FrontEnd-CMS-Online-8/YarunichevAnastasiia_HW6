var gulp = require('gulp'),
	sass = require('gulp-sass'),
	del  = require('del');

gulp.task('sass', function() {
	return gulp.src('app/sass/*.sass')
		.pipe(sass())
		.pipe(gulp.dest('app/css'))
});


gulp.task('clean', function() {
	return del.sync('dist');
});

gulp.task('watch', function() {
	gulp.watch('app/sass/**/*.sass', gulp.series('sass'));
});

gulp.task('build', gulp.parallel('clean', 'sass'), function() {

	var builCss = gulp.src(
		'app/css/main.css')
		.pipe(gulp.dest('dist.css'));

	var buildHtml = gulp.src('app/*html')
		.pipe(gulp.dest('dist'));

});