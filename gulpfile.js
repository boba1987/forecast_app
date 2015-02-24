/*global require */

(function () {
   'use strict';
}());

var gulp = require('gulp');

// load plugins
var $ = require('gulp-load-plugins')();

var bower = require('bower');

gulp.task('bower', function(cb){
  bower.commands.install([], {save: true}, {})
    .on('end', function(installed){
      cb(); // notify gulp that this task is finished
    });
});

gulp.task('jshint', function () {
    return gulp.src(['*.js', 'app/**/*.js', 'public/**/*.js'])
        .pipe($.jshint())
        .pipe($.jshint.reporter(require('jshint-stylish')));
});

gulp.task('serve', function () {
  $.nodemon({ script: 'server.js'});
});
