const gulp = require('gulp'),
        chalk = require('chalk'),
        browserSync = require('browser-sync').create(),
        reload = browserSync.reload;
        paths = {
            src: {
                main: './src/',
                html: './src/*.html',
                imgs: './src/images'
            },
            dest: './dist/'
        };

// Compile sass into CSS & auto-inject into browsers
gulp.task('html', function() {
    console.log('Task HTML...')
    return gulp.src(paths.src.html)
    //.pipe(sass())
    .pipe(gulp.dest(paths.dest))
    .pipe(browserSync.stream());
});

// Static Server + watching scss/html files
gulp.task('serve', ['html'], function() {
    browserSync.init({
        server: paths.dest
    });
    gulp.watch(paths.src.html, ['html']).on('change', reload);
});

gulp.task('default', ['serve']);