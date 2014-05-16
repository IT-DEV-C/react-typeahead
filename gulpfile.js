var gulp   = require('gulp'),
    react  = require('gulp-react'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    es6    = require('gulp-es6-module-transpiler');

gulp.task('default', function () {
    return gulp.src('src/*.jsx')
      .pipe(react())
      .pipe(concat('typeahead.js'))
      .pipe(es6({
        moduleName: 'amd'
      }))
      .pipe(uglify())
      .pipe(gulp.dest('dist/'));
});