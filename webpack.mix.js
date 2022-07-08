const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.setPublicPath('./public').copyDirectory('resources/img', 'public/img');

mix.setPublicPath('./public').sass('resources/sass/back-office.scss', 'public/css').version();
mix.setPublicPath('./public').sass('resources/sass/login.scss', 'public/css').version();

mix.setPublicPath('./public')
    .scripts([
        'public/packages/backpack/base/js/bundle.js',
        // BackPack bundle included:
        // - jquery
        // - dataTables
        // - popper.js
        // - noty
        // - bootstrap
        // - @coreui/coreui
        // - pace-js
        // - animate.css
        // - sweetalert

        // 'resources/js/plugins/jquery.validate.min.js',
        // 'resources/js/plugins/jasny-bootstrap.min.js',
        // 'resources/js/plugins/chartist.min.js',
        // 'node_modules/moment/dist/moment.js',
        // 'resources/js/plugins/perfect-scrollbar.jquery.min.js',
        // 'resources/js/plugins/bootstrap-tagsinput.js',
        // 'resources/js/plugins/bootstrap-switch.js',

        'node_modules/select2/dist/js/select2.js',
        'node_modules/select2/dist/js/i18n/hu.js',

        // 'resources/js/plugins/jquery.bootstrap-wizard.js',
        // 'resources/js/plugins/nouislider.js',
        'resources/js/plugins/bootstrap-notify.js',
        // 'resources/js/plugins/bootstrap-datetimepicker.js',
        // 'resources/js/plugins/bootstrap-table.js',
        // 'resources/js/plugins/bootstrap-selectpicker.js',
        // 'resources/js/light-bootstrap-dashboard.js',
    ], 'public/js/back-office.js')
    .version();

// talán deprecated már?
// mix.setPublicPath('./public').js([
//     'resources/js/components/toggle-currency-fields.js',
//     //Important to be this one the last
//     'resources/js/components/trigger-document-ready.js',
// ], 'public/js/scripts.js').version();

// bank connection, aggreg8, handlebars, custom scripts
mix.setPublicPath('./public').copyDirectory('resources/handlebars/', 'public/js/handlebars');
mix
    .scripts([
            // 'resources/js/aggreg8/aggreg8-sdk.js',
            'node_modules/handlebars/dist/handlebars.js',
        ], 'public/js/customer_profile_bundle.js'
    )
    .js('resources/js/customer_profile.js', 'public/js/customer_profile.js')
    .version();

mix.js('resources/js/vue/vue.js', 'public/js/admin_vue.js').vue();
