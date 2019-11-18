module.exports = function () {
    $.gulp.task('script:libs', () => {
        return $.gulp.src([
            './app/scripts/libs/**/*.js',
            './app/scripts/libs/_lazy.js'
            ])
            .pipe($.plugins.sourcemaps.init())
            .pipe($.plugins.concat('libs.min.js')) // Собираем их в кучу в новом файле
            .pipe($.plugins.terser()) // Сжимаем JS файл
            .pipe($.plugins.sourcemaps.write('./')) 
            .pipe($.gulp.dest('./build/scripts'));
    });
    $.gulp.task('script:custom', () => {
        return $.gulp.src([
            './app/scripts/*.js'
            ])
            .pipe($.plugins.sourcemaps.init())
            .pipe($.plugins.terser()) // Сжимаем JS файл
            .pipe($.plugins.sourcemaps.write('./'))
            .pipe($.gulp.dest('./build/scripts'));
    });
    $.gulp.task('scripts', $.gulp.parallel('script:libs', 'script:custom'));
};