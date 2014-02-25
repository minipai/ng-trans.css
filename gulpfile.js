var connect = require('connect')
var open    = require("open")

var gulp    = require('gulp')
var stylus  = require('gulp-stylus')
var prefix  = require('gulp-autoprefixer')
var plumber = require('gulp-plumber')

var compileStylus = function(src) {
  gulp.src(src)
      .pipe(plumber())
      .pipe(stylus())
      .pipe(prefix("last 2 version", "> 1%", "ie 8"))
      .pipe(gulp.dest('./'))
      .pipe(gulp.dest('document/'));
};

gulp.task('connect', function() {
  connect.createServer(
    connect.static(__dirname + '/document')
  ).listen(8080);

  open("http://0.0.0.0:8080", "Google Chrome");

});

gulp.task('stylus', function() {
  compileStylus('./source/ng-trans.styl');
});

gulp.task('watch', function () {
  gulp.watch('source/*.styl', ['stylus']);
});

gulp.task('default', ['stylus']);

gulp.task('serve', function(){
  gulp.run('connect', 'stylus');

  gulp.watch('source/*.styl', function(event){
    console.log('File '+event.path+' was '+event.type+', running tasks...');
    compileStylus('./source/ng-trans.styl');
  });
});