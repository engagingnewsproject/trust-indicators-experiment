var gulp = require('gulp');
var browserSync = require('browser-sync');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var reload  = browserSync.reload;


// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync({
        proxy: "dev/truth-project"
    });
    // Watch SCSS file for change to pass on to sass compiler,
    gulp.watch('../stylesheets/*.{scss,sass}', ['sass']);
    // Watch our CSS file and reload when it's done compiling
    gulp.watch("../*.css").on('change', reload);
    // Watch php file
    gulp.watch("../*.php").on('change', reload);
    // watch javascript files
    gulp.watch("../js/*.js").on('change', reload);
});

gulp.task('sass', function () {
  // gulp.src locates the source files for the process.
  // This globbing function tells gulp to use all files
  // ending with .scss or .sass within the scss folder.
  return gulp.src('../stylesheets/*.{scss,sass}')
    // Initializes sourcemaps
    .pipe(sourcemaps.init())
    // Converts Sass into CSS with Gulp Sass
    .pipe(sass({
      errLogToConsole: true
    }))
    // adds prefixes to whatever needs to get done
    .pipe(autoprefixer())
    // Writes sourcemaps into the CSS file
    .pipe(sourcemaps.write())
    // Outputs CSS files in the css folder
    .pipe(gulp.dest('../'));
})


// Creating a default task
gulp.task('default', ['serve']);
