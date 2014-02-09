var gulp    = require('gulp')
,   connect = require('gulp-connect')
,   stylus  = require('gulp-stylus')
,   prefix  = require('gulp-autoprefixer');


gulp.task('connect', connect.server({
  root: __dirname + '/document',
  port: 1337,
  open: { browser: 'Google Chrome'},
  })
);

gulp.task('stylus', function() {
  gulp.src('./source/ng-trans.styl')
      .pipe(stylus())
      .pipe(prefix("last 2 version", "> 1%", "ie 8"))
      .pipe(gulp.dest('./'))
      .pipe(gulp.dest('document/'))
});

gulp.task('watch', function () {
  gulp.watch('source/*.styl', ['stylus']);
});

gulp.task('default', ['stylus'])


gulp.task('dev', function(){
  gulp.run('connect', 'stylus');

  gulp.watch('source/*.styl' , function(ev){
        gulp.run('stylus')
    });
});