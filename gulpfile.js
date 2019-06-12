var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();

gulp.task('watch', function() {

  browserSync.init({
    notify: false,
    server: {
      baseDir: "./src"
    }
  });

  watch('./src/*.html', function() {
    browserSync.reload();
  });

  watch('./src/*.css', function() {
    browserSync.reload();
  });

});
