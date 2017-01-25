'use strict';

/**
 * WATCH task
 * Run tasks listed on file change
 * Refer to https://github.com/gruntjs/grunt-contrib-watch for documentation
 */
module.exports.tasks = {

    watch: {

        styles: { // On styles change
            files: // When those files are saved... 
            [
                '<%= pathto.css %>/**/*'
            ],
            tasks: // ...those tasks are executed. 
            [
                'less',
                'notify'
            ]
        },

        scripts: { // On scripts change
            files: // When those files are saved... 
            [
                '<%= pathto.js %>/**/*'
            ],
            tasks: // ...those tasks are executed. 
            [
                'jshint',
                'uglify',
                'notify'
            ]
        },

        tasks: { // On tasks update
            files: // When those files are saved... 
            [
                'Gruntfile.js',
                '<%= pathto.tasks %>/*', 
            ],
            tasks: // ...those tasks are executed. 
            [
                'less',
                'jshint',
                'uglify',
                'notify'
            ]
        }
    }
};