const { mix } = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('node_modules/bootstrap/dist/js/bootstrap.js', 'public/js/app.js')
  .react('resources/assets/js/app.jsx', 'public/js/front.js')
  .sass('resources/assets/sass/app.scss', 'public/css')
  .sass('resources/assets/sass/front.sass', 'public/css');

if (mix.config.inProduction) {
    mix.version();
}