const gulp = require('gulp')

// www files to dist folder
gulp.task('copy', () =>
  gulp.src([
    'www/**/*'
  ]).pipe(gulp.dest('dist'))
);

// Default Task
gulp.task('default', ['copy']);