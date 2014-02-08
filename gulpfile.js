var gulp    = require('gulp')
,   connect = require('gulp-connect')
,   stylus  = require('gulp-stylus')

gulp.task('connect', connect.server({
  root: __dirname + '/document',
  port: 1337,
  open: { browser: 'Google Chrome'},
  })
);

gulp.task('stylus', function() {
  gulp.src('./source/ng-trans.styl')
      .pipe(stylus())
      .pipe(gulp.dest('./'))
});

gulp.task('default', ['stylus'])
