'use strict';

/**
 * NOTIFY task
 * Notifies you of any suceeded or failed task without requiring you to watch the cmd window
 * Refer to https://github.com/dylang/grunt-notify for documentation
 */
module.exports.tasks = {

    notify: {
        dev: {
            options: {
                message: 'Allting är uppdaterat och fungerar bra. YOU´RE THE BOOOMB!'
            }
        }
    }
};