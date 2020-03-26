var { src, dest, watch, series } = require('gulp'); //src 要监听的路径  dest 输出的路径  watch 监听  series  串联 一个执行完后在执行下一个  parallel 并联 一起执行多个
var sass = require('gulp-sass'); //require 引入
sass.compiler = require('node-sass');
const px2rem = require('gulp-px2rem'); //const 常量
var browserSync = require('browser-sync').create();


function fnsass() {
    return src('./sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(dest('./out'));
} //sass编译

var option = {
    rootValue: 62, //
    unitPrecision: 5, //保留小数点后五位数
    propertyBlackList: [],
    propertyWhiteList: [],
    replace: true,
    // mediaQuery: false,
    minPx: 1
}

function fnpx2rem() {
    return src('./out/*.css')
        .pipe(px2rem(option))
        .pipe(dest('./style'));
}
//px转rem

//browser-sync
function fnbrow() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
}

function fnwatch() {
    watch('./sass/*.scss', series(fnsass, fnpx2rem));
    watch('*.html').on('change', browserSync.reload);
    watch('./style/*.css').on('change', browserSync.reload);
    watch('./js/*.js').on('change', browserSync.reload);
    fnbrow();
}


exports.w = fnwatch;