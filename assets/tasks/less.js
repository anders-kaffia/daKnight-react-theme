'use strict';

/**
 * LESS task
 * Compiles .less to .css and compress in production
 * Refer to https://github.com/gruntjs/grunt-contrib-less for documentation
 */
module.exports.tasks = {

    less: {
        prod: { // Production files
            options: {
                compress: true,
                yuicompress: true,
                sourceMap: false,
                // sourceMapFilename: '<%= pathto.css %>/styles.css.map', // Where file is generated and located
                // sourceMapURL: '', // The complete url and filename put in the compiled css file
                // sourceMapBasepath: '', // Sets sourcemap base path, defaults to current working directory.
                // sourceMapRootpath: '' // Adds this path onto the sourcemap filename and less file paths
            },
            files: {
                '<%= pathto.css %>/styles.css': '<%= pathto.css %>/styles.less' // target : source
            }
        }
    }
};