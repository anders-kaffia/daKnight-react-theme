'use strict';

/**
 * UGLIFY task
 * Minify scripts only in production & publish result in dist folder
 * Refer to https://github.com/gruntjs/grunt-contrib-uglify for documentation
 */
module.exports.tasks = {

    uglify: {
        options: {
            mangle: true,
            compress: true,
            sourceMap: true,
            banner: '/* <%= pkg.name %> - Concatenated and minified with Grunt - Timestamp: <%= grunt.template.today("yyyy-mm-dd h:MM:ss") %> */'
        },
        prod: { // Production files
            files: {
                '<%= pathto.js %>/scripts.min.js': 
                [
                    '<%= pathto.js %>/libraries/jquery-2.1.1.js',
                    '<%= pathto.js %>/libraries/slick.js',
                    '<%= pathto.js %>/scripts.js'
                ]
            }
        }
    }
};