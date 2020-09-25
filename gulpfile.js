var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var imagemin = require('gulp-imagemin');

var less = require('gulp-less');
var LessAutoprefix = require('less-plugin-autoprefix');
var autoprefix = new LessAutoprefix({ browsers: ['last 2 versions'] });

const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const concat = require('gulp-concat');


function css() {
    return gulp
        .src('./styles/style.less')
        .pipe(less({
            plugins: [autoprefix]
        }))
        .pipe(gulp.dest('./styles/'));
}

function serve() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch('./*.html').on('change', browserSync.reload);
    gulp.watch('./styles/*.less', css).on('change', browserSync.reload);
    gulp.watch('./scripts/main.js').on('change', browserSync.reload);
}

exports.default = serve;