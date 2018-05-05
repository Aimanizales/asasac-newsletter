const gulp = require('gulp'),
        chalk = require('chalk'),
        browserSync = require('browser-sync').create(),
        reload = browserSync.reload;
        paths = {
            src: './src',
            dest: './dist'
        };


// Compile sass into CSS & auto-inject into browsers
gulp.task('html', function() {
    return gulp.src(paths.src)
    //.pipe(sass())
    .pipe(gulp.dest(paths.dest))
    .pipe(browserSync.stream());
});

// Static Server + watching scss/html files
gulp.task('serve', function() {
    console.log('browserSync');
    initServe();
    gulp.watch(paths.src, ['html']);
    gulp.watch(`paths.src${'*.html'}`).on('change', reload);
});


function initServe () {
    browserSync.init({
        server: paths.src
        // or
        // proxy: 'yourserver.dev'
    });
}
initServe();
//gulp.task('default', ['serve']);

/* 
function (event) {
    console.log(event);
    console.log('File ' + chalk.blue(event.path) + ' was ' + event.type + ', running tasks...');
 */