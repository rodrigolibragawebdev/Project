"use strict";

const gulp = require("gulp");

const sass = require("gulp-sass")(require("sass"));

sass.compiler = require("node-sass");

gulp.task("default", watchFunction);

gulp.task("watch", watchFunction);

gulp.task("bootstrap-sass", function () {
  //COMPILE THIS
  return (
    gulp
      .src("src/sass/bootstrap/theming_bootstrap.scss")
      .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
      // SAVE IN
      .pipe(gulp.dest("src/sass/bootstrap"))
  );
});

gulp.task("pages-sass", function () {
  //COMPILE THIS
  return (
    gulp
      .src("src/sass/pages_sass/*.scss")
      .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
      // SAVE IN
      .pipe(gulp.dest("src/sass/pages_css"))
  );
});

function watchFunction() {
  // PATH FOR WATCH
  gulp.watch(
    ["src/sass/bootstrap/**/*.scss", "src/sass/custom_sass/**/*.scss", "src/sass/pages_sass/**/*.scss"],
    gulp.series(["bootstrap-sass", "pages-sass"])
  );
}


