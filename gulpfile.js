const gulp = require('gulp'),
      sass = require('gulp-sass')(require('sass'));   

gulp.task('sass', function() {
    return gulp.src('src/sass/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('src/css'))
});
