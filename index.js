var gulp    = require('gulp'),
    replace = require('gulp-batch-replace'),
    parsePath = require('parse-filepath'),
    Elixir  = require('laravel-elixir'),
    Task    = Elixir.Task;

Elixir.extend('replace', function(file, replacements, output) {

    return new Task('replace', function() {
        this.log(file, output);

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
    })
    .watch(file);

});
