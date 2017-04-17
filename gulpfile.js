var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');


gulp.task('sass', function(){
	return gulp.src('app/scss/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('css'))

});

gulp.task('scripts', function(){
	return  gulp.src('js/**/*.js')
					.pipe(concat('all.js'))
					.pipe(uglify())
					.pipe(gulp.dest('js'))
});

gulp.task('default', function(){
	gulp.watch('app/scss/**/*.scss', ['sass']);
	gulp.watch('js/**/*.js',['scripts']);
});
