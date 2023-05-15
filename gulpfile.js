"use strict"

const gulp = require ('gulp')

const sass = require ('gulp-sass')(require('sass'))

sass.compiler = require('node-sass')

gulp.task('default', watchFunction)

gulp.task('watch', watchFunction)

gulp.task('sass', function () {
    //COMPILE THIS
    return gulp.src('scss/custom.scss')
      .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
      // SAVE IN
      .pipe(gulp.dest('scss/'));
  });

function watchFunction() {
  // PATH FOR WATCH
    gulp.watch('node_modules/bootstrap/scss/**/*.scss', gulp.series(['sass']));
}