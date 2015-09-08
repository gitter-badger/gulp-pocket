
// dependencies
var gulp          = require('gulp');
var less          = require('gulp-less');
var sourcemaps    = require('gulp-sourcemaps');
var minifyCSS     = require('gulp-minify-css');
var uglify        = require('gulp-uglify');
var rename        = require('gulp-rename');
var concat        = require('gulp-concat');
var image         = require('gulp-image');
var util          = require('gulp-util'); // console logs
var notify        = require('gulp-notify'); // system notifications
var browserSync   = require('browser-sync').create();

// helper functions
var logChange   = function(event) { util.log(util.colors.yellow(event.type, event.path)) };
var notifyError = notify.onError('<%= error.message %>');

// compile less
gulp.task('styles', function() {
  return gulp.src('src/less/theme.less')
    .pipe(sourcemaps.init())
      .pipe(less().on('error', notifyError))
      .pipe(rename('app.css'))
      .pipe(gulp.dest('dist/assets/css/'))
      .pipe(minifyCSS())
      .pipe(rename('app.min.css'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist/assets/css/'))
});

// compile javascript
gulp.task('scripts', function() {
  return gulp.src('src/js/*')
    .pipe(sourcemaps.init())
      .pipe(concat('app.js'))
      .pipe(gulp.dest('dist/assets/js/')) // deliver expanded
      .pipe(uglify().on('error', notifyError)) // pick it up again
      .pipe(rename('app.min.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist/assets/js/')) // deliver uglified
});

// optimize images (call this task manually with `$ gulp images`)
gulp.task('images', function() {
  return gulp.src('src/img/**')
    .pipe(image())
    .pipe(gulp.dest('dist/assets/img/'));
});

// static server for development
gulp.task('server', function() {
  browserSync.init({
    server: { baseDir: './dist' }, // where to serve index
    files: ['dist/assets/css/*', 'dist/assets/js/*', 'dist/**/*.html'] // refresh browser when these files change
  });
});

// watch task
gulp.task('watch', function() {
  // watch files and rerun tasks if change is detected
  gulp.watch('src/less/*', ['styles']).on('change', logChange);
  gulp.watch('src/js/*', ['scripts']).on('change', logChange);
});

// default task
gulp.task('default', ['styles', 'scripts', 'server', 'watch'], function(event) {
  util.log(util.colors.green('Default task is being run…'));
});
