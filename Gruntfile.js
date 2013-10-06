module.exports = function (grunt) {
    'use strict';
    var path = require('path');

    grunt.config.init({
        pkg: grunt.file.readJSON('package.json'),
        version: '<%= pkg.version %>',
        srcPath: 'src',
        distPath: 'build',

        copy: {
            main: {
                files: [
                    {
                        expand: true,
                        cwd: '<%= srcPath %>/',
                        src: ['**/*.js', '*.js'],
                        dest: '<%= distPath %>',
                        ext: '.debug.js'
                    },
                    {
                        expand: true,
                        cwd: '<%= srcPath %>/',
                        src: ['**/*.css', '*.css'],
                        dest: '<%= distPath %>',
                        ext: '.debug.css'
                    }
                ]
            }
        },
        cssmin: {
            main: {
                files: {
                    '<%= distPath %>/mixsln.css': '<%= distPath %>/mixsln.debug.css',
                    '<%= distPath %>/mixsln-notheme.css': '<%= distPath %>/mixsln-notheme.debug.css'
                }
            }
        },
        uglify: {
            tools: {
                files: [
                    {
                        expand: true,
                        cwd: '<%= distPath %>/',
                        src: ['**/*.debug.js'],
                        dest: '<%= distPath %>/',
                        ext: '.js'
                    }
                ]
            },
            plugins: {
                files: [
                    {
                        expand: true,
                        cwd: '<%= distPath %>/plugins/',
                        src: ['**/*.debug.js'],
                        dest: '<%= distPath %>/plugins/',
                        ext: '.js'
                    }
                ]
            }
        },

        source_wrap: {
            main:{
                files: [{
                    expand: true,
                    cwd: '<%= distPath%>',
                    src: ['**/*.js','!**/*__cached.js'],
                    dest: '<%= distPath %>',
                    ext: '__cached.js'
                }]
            },

            test:{
                files: [{
                    expand: true,
                    cwd: 'test/1.0',
                    src: ['**/*.js','!**/*__cached.js'],
                    ext: '__cached.js'
                }]
            }
        }
    });

    // grunt plugins
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-source-wrap');

    // Default grunt
    grunt.registerTask('default', ['copy', 'cssmin', 'uglify','source_wrap:main']);
    grunt.registerTask('test', ['copy', 'cssmin', 'uglify','source_wrap:test']);

};