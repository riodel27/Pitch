var gulp = require('gulp');
var sass = require('gulp-sass');



gulp.task('sass', function(){
	return gulp.src('app/scss/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('css'))

});

gulp.task('default', function(){
	gulp.watch('app/scss/**/*.scss', ['sass']);
});
