'use strict';
/*global module:false*/
module.exports = function (grunt) {

    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);

    grunt.file.defaultEncoding = 'utf8';
    grunt.file.preserveBOM = true;

    grunt.initConfig({        

        pkg: grunt.file.readJSON('package.json'),
        timestamp: grunt.template.today('mm-dd-yyyy @ HH-MM-ss'),
        baseFolder: __dirname,

        // File Paths
        WebApp_src: '../../src/',
        WebApp_Dest: '../../dest',

        banner: '/*!\n*\n*		<%= pkg.name %> - 2017-<%= grunt.template.today("yyyy") %>\n' +
        '*		  <%= pkg.homepage %>\n*\n' +
        '*		  v.<%= pkg.version %>\n*\n' +
				'*		   <%= timestamp %>\n*/\n\n' +
				'/* File generated automatically */',

        // SCSS Compile
        // sass: {
        //     options: {
        //         sourceMap: false
        //     },

        //     // WebApp
        //     WebApp: {
        //         files: {
        //             '<%= WebApp_Dest %>/light.css': '<%= WebApp_src %>/light.scss'
        //         }
        //     }
        // },

        // LINT Task
        // sasslint: {
        //     WebApp: [
        //       '<%= WebApp_src %>/**/*.scss',
        //     ],
        // },

        // Banner Task
        // usebanner: {
        //     SysCopyright: {
        //         options: {
        //             position: 'top',
        //             banner: '<%= banner %>',
        //             linebreak: true
        //         },
        //         files: {
        //             src: [
        //               '<%= WebApp_Dest %>/*.css',
        //             ]
        //         }
        //     }
        // },

        // Watch Task
        // TODO: Split by file
        watch: {
            options: {
                dateFormat: function (time) {
                    grunt.log.writeln('\nThe watch finished in ' + time + 'ms at ' + (new Date()).toString() + '\n-----------------------------\n');
                    grunt.log.writeln('Waiting for more changes... \n');
                }
            },
            webapp: {
                files: '../../src/**/*.scss',
                tasks: ['sass:WebApp', 'usebanner:SysCopyright', 'notify:watch']
            },
            sass: {
                files: '../../src/**/*.scss',
                tasks: ['sass', 'usebanner:SysCopyright', 'notify:watch']
            },
        },

        // Zip it
        compress: {
            main: {
              options: {
                archive: 'bin/<%= pkg.displayName %>.zip'
              },
              files: [{
                expand: true,
                comment:'<%= banner %>',
                src: ['src/**', 'icons/*', 'manifest.json']
              }]
            }
        },

        writefile: {
            options: {
                data: {
                    //foo: 1
                }
            },
            main: {
                src: 'src/manifest.hbs',
                dest: 'manifest.json'
            }
        },

        // Notify 
        notify: {
            options: {
                enabled: true,
                max_jshint_notifications: 5,
                success: true,
                duration: 5
            },

            watch: {
                options: {
                    title: 'Task Complete',
                    message: 'Task finished with success'
                }
            },

            build: {
                options: {
                    title: 'Build Complete',
                    message: 'Build finished with success'
                }
            }
        },
    });


    // Load tasks

    // Default
    grunt.registerTask('default', ['sass', 'usebanner:SysCopyright', 'sasslint']);

    // Dev
    grunt.registerTask('dev', ['watch', 'usebanner:SysCopyright']);

    // Lint
    grunt.registerTask('lint', ['sasslint']);

    // Banner
    grunt.registerTask('banner', ['usebanner']);

    // ZipIt
    grunt.registerTask('zip', ['compress']);

    // Build
    grunt.registerTask('build', ['sass:WebApp', 'usebanner:SysCopyright', 'compress']);

    // Debug
    grunt.registerTask('printConfig', function () {
        grunt.log.writeln(JSON.stringify(grunt.config(), null, 2));
    });
};