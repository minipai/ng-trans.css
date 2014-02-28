var connect = require('connect')
var open    = require("open")

var gulp    = require('gulp')
var stylus  = require('gulp-stylus')
var prefix  = require('gulp-autoprefixer')
var plumber = require('gulp-plumber')

var rename = require("gulp-rename");
var minify = require('gulp-minify-css');


gulp.task('stylus', function() {
  var stream = gulp.src('./source/ng-trans.styl')
      .pipe(plumber())
      .pipe(stylus())
      .pipe(prefix("last 2 version", "> 1%", "ie 8"))
      .pipe(gulp.dest('./'))
      .pipe(gulp.dest('document/'));
  return stream
});

gulp.task('minify', ['stylus'], function() {
  var stream = gulp.src('./ng-trans.css')
    .pipe(rename({suffix: ".min"}))
    .pipe(minify(opts))
    .pipe(gulp.dest('./'))
  return stream
});

gulp.task('connect', function() {
  connect.createServer(
    connect.static('./document')
  ).listen(5000);

  open("http://0.0.0.0:5000", "Google Chrome");
});

gulp.task('watch', function() {
  var watcher = gulp.watch('./source/*.styl', function(){
    gulp.start('stylus')
    gulp.start('minify')
  });
});

gulp.task('serve', ['connect', 'stylus', 'minify', 'watch'])

gulp.task('default', ['stylus', 'minify']);