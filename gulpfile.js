'use strict';

let gulp = require('gulp');
let babel = require('gulp-babel');
let uglify = require('gulp-uglify');
let pump = require('pump');
const image = require('gulp-image');
let sass = require('gulp-sass');
let uglifycss = require('gulp-uglifycss');

sass.compiler = require('node-sass');


gulp.task('babel', () =>
  gulp.src('src/js/*.js')
  .pipe(babel({
    presets: ['@babel/env']
  }))
  .pipe(gulp.dest('src/js/js_babel'))
);

gulp.task('compress', function (cb) {
  pump([
      gulp.src('src/js/js_babel/*.js'),
      uglify(),
      gulp.dest('dist/js')
    ],
    cb
  );
});

gulp.task('sass',  () => {
  return gulp.src('src/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('src/css'));
});

gulp.task('css', function () {
  gulp.src('src/css/*.css')
    .pipe(uglifycss({
      "maxLineLen": 80,
      "uglyComments": true
    }))
    .pipe(gulp.dest('dist/css'));
    return new Promise(function (resolve, reject) {
      console.log("Finished uglifycss");
      resolve();
    });
});

gulp.task('image', function () {
  gulp.src('src/img/*')
    .pipe(image())
    .pipe(gulp.dest('dist/img'));
  return new Promise(function (resolve, reject) {
    console.log("Finished Images");
    resolve();
  });
});


gulp.task('watch', () => {
  gulp.watch('src/img/*', gulp.series('image'));
  gulp.watch('src/js/*.js', gulp.series('babel'));
  gulp.watch('src/js/js_babel/*.js', gulp.series('compress'));
  gulp.watch('src/sass/*.scss', gulp.series('sass'));
  gulp.watch('src/css/*.css', gulp.series('css'));
});




gulp.task('default', gulp.series('babel', 'compress', 'image', 'sass', 'css', 'watch'));