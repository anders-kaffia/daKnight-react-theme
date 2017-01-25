'use strict';

/**
 * Grunt workflow for development and production
 * Refer to http://gruntjs.com for documentation
 * @author: <matilda@daknight.se>
 */
module.exports = function (grunt) {

    /**
     * Loads all Grunt plugins to execute tasks
     * Refer to https://github.com/sindresorhus/load-grunt-tasks for documentation
     */
    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt); // Time how long tasks take



    /**
     * Loads all Grunt plugins to execute tasks
     */
    var options = {
        // Grunt "load-grunt-configs" settings
        config : {
            src: 'tasks/*.js'
        },
        pkg: grunt.file.readJSON('package.json'),
        // Project settings
        pathto: {
            root: '..',
            assets: '.',
            css: '<%= pathto.assets %>/styles',
            js: '<%= pathto.assets %>/scripts',
            img: '<%= pathto.assets %>/media/images',
            ft: '<%= pathto.assets %>/media/fonts',
            tasks: 'tasks',
        }
    };


    /**
     * Loads the various tasks configuration files and passes our options object
     * Refer to https://github.com/creynders/load-grunt-configs for documentation
     */
    var configs = require('load-grunt-configs')(grunt, options);


    /**
     * Passes the tasks configuration files into Grunt
     * Refer to http://gruntjs.com for documentation
     */
    grunt.initConfig(configs);


    /**
     * LOCAL environment
     * This is the default process, refers to the watch task
     * Execute "grunt" from command line
     */
    grunt.registerTask(
        'default',
        [
            'watch'
        ]
    );


    /**
     * TEST environment
     * Tasks triggered on a pre-build event, executed in TFS before deployment to test server
     * Execute "grunt dev" from command line
     */
    grunt.registerTask(
        'dev',
        [
            'less',
            'uglify',
            'notify'
        ]
    );


    /**
     * STAGE/PRODUCTION environment
     * Triggered after deployment on the test server
     * Execute "grunt prod" from command line
     */
    grunt.registerTask(
        'prod',
        [
            'less',
            'uglify'
        ]
    );

};