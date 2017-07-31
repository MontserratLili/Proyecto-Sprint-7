var gulp = require('gulp');
var jade = require('gulp-jade');
var sass = require('gulp-sass');



gulp.task('jade', function(){
    gulp.src('./src/*.jade')
    .pipe(jade({
        pretty: true
    }))
    .pipe(gulp.dest('./public'))
})

gulp.task('watch', function(){
    gulp.watch('./src/*.jade', ['jade'])
});

gulp.task('sass', function(){
    gulp.src('./src/scss/*.scss')
        .pipe(sass({
        outputStyle: "compressed"
    }).on("error", sass.logError))
    .pipe(gulp.dest('/css/'));
});

gulp.task('default', ['jade', 'watch', 'sass'])