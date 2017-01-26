/*!
 * Bootstrap's Gruntfile
 * https://getbootstrap.com
 * Copyright 2013-2016 The Bootstrap Authors
 * Copyright 2013-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      dist: {
        files: {
          'css/style.css' : 'scss/bootstrap.scss'
        }
      }
    },

    compass: {
      dist: {
        options: {
          config: 'config.rb'
        }
      }
    },

    /*uglify: {
      my_target: {
        files: {
          'js/main.min.js': ['js/main.js'],
          'js/customizer.min.js': ['js/customizer.js']
        }
      }
    },*/

    watch: {
      css: {
        files: ['scss/*.scss'],
        tasks: ['sass', 'compass']
      },
       scripts: {
        files: ['js/*.js']
      }
    }

  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-compass');
  //grunt.loadNpmTasks('grunt-contrib-uglify');

};