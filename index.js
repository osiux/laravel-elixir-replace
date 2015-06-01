var gulp    = require('gulp'),
    elixir  = require('laravel-elixir'),
    replace = require('gulp-batch-replace'),
    parsePath = require('parse-filepath'),
    utilities = require('laravel-elixir/ingredients/commands/Utilities');

elixir.extend('replace', function(file, replacements, output) {

    gulp.task('replace', function () {
        utilities.logTask("Replacing strings in", file);

        if ( output ) {
            var path = parsePath(output),
                isDir = (path.basename == path.name),
                dest = isDir ? output : path.dirname;
        }else{
            var dest = parsePath(file).dirname;
        }

        return gulp.src(file)
                   .pipe(replace(replacements))
                   .pipe(gulp.dest(dest));
    });

    return this.queueTask('replace');
});