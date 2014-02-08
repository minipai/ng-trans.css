var gulp    = require('gulp')
,   connect = require('gulp-connect')

gulp.task('connect', connect.server({
  root: __dirname + '/document',
  port: 1337,
  open: { browser: 'Google Chrome'},
  })
)

gulp.task('default', ['connect'])
