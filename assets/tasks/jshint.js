'use strict';

/**
 * JSHINT task
 * Lints js on the files of your choice
 * Refer to https://github.com/gruntjs/grunt-contrib-jshint for documentation
 */
module.exports.tasks = {

    jshint: {
        dev: { // Development tasks
            files: {
                src:
                [
                    '<%= pathto.js %>/jquery.form.js',
                    '<%= pathto.js %>/jquery.toggle.js',
                    '<%= pathto.js %>/jquery.smoothscroll.js',
                    '<%= pathto.js %>/libraries/stellar.js',
                    '<%= pathto.js %>/scripts.js'
                ]
            }
        }
    }
};