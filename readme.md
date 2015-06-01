#Rename Ingredient for Laravel Elixir

This is a simple [gulp-batch-replace](https://www.npmjs.com/package/gulp-batch-replace) wrapper ingredient for Laravel Elixir.

## Installation

`npm install --save-dev laravel-elixir-replace`

## Usage

Add it to your Elixir-enhanced Gulpfile, like so:

```javascript
var elixir = require('laravel-elixir');

require('laravel-elixir-replace');

var replacements = [
    ['fonts/', '../fonts/'],
    ['images/', '../images/']
];

elixir(function(mix) {
   mix.replace('public/css/app.css', replacements);
});
```

This would replace any instance of `fonts/` to `../fonts/` and `images/` to `../images/` in your `public/css/app.css` file.

The parameters are `replace(file, replacements, output)`

`output` is optional. If not specified, it defaults to the same file as input.

To see what `replacements` can be, see the [gulp-batch-replace docs](https://www.npmjs.com/package/gulp-batch-replace#readme)

## Bugs and Contributions

If you find a bug, please [post an issue on GitHub](https://github.com/osiux/laravel-elixir-replace/issues) describing the problem.
Or better yet, make a pull request with the solution.

## License

This is open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT)