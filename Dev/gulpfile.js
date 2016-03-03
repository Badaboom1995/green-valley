var gulp = require('gulp'),
 less = require('gulp-less'),
 notify = require("gulp-notify"),
  path = require('path');

gulp.task('default', function () {
   return gulp.src('less/style.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('css'))
    .pipe(notify("Hello Gulp!"));
});
gulp.task('watch', function () {
  gulp.watch('less/*.less', ['default']);
});