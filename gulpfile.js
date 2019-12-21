const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');

require('gulp-watch');
const browserSync = require('browser-sync').create();

gulp.task('sass-compile', function () {
  return gulp.src('./scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./css/'));
});

gulp.task('browser-sync', function () {

});

gulp.task('watch', function () {
  browserSync.init({
    server: {
      baseDir: './'
    },
    browser: 'google chrome'
  });
  gulp.watch('./scss/**/*.scss', gulp.series('sass-compile'));

  gulp
    .watch(['./scss/**/*.scss', './*.html', './js/**/*.js'], gulp.series('sass-compile'))
    .on('change', browserSync.reload);
});
