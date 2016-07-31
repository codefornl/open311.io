var gulp = require('gulp'),
  less = require('gulp-less'),
  include = require("gulp-include"),
  install = require("gulp-install"),
  gp_concat = require('gulp-concat'),
  gp_rename = require('gulp-rename'),
  gp_uglify = require('gulp-uglify'),
  gp_sourcemaps = require('gulp-sourcemaps');

var spawn = require('child_process').spawn;
var path = require('path');

var node;

var dirs = {
    serverbuild: "./build",
    serversrc: "./src"
};

//kill node on exit
process.on('exit', function() {
    if (node) node.kill();
});

/*Build server*/
gulp.task('install', ['copy' ,'install_npm']);

gulp.task('copy',function(){
    return gulp.src(dirs.serversrc+'/**/*')
        .pipe(gulp.dest(dirs.serverbuild+'/'));
});

gulp.task('install_npm',function(){
    return gulp.src([dirs.serverbuild+'/package.json'])
        .pipe(install());
});
