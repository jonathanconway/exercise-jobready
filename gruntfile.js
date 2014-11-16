'use strict';

module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		jshint: {
			all: ['**.*/js', '**.*/json'],
			options: {
				node: true,
				globals: {
					'define': true,
					'window': false,
					'navigator': false,
					'google': false,
					'document': false
				}
			}
		},
		less: {
			development: {
				options: {
				},
				files: {
					'public/styles/jobready.css': 'public/styles/jobready.less'
				}
			},
		},
		nodemon: {
			dev: {
				script: 'server.js',
				options: {
					args: ['dev'],
					ext: '*.js,*.json,*.jade'
				}
			}
		},
		concurrent: {
			dev: ['jshint', 'less', 'watch', 'nodemon'],
			options: {
				logConcurrentOutput: true
			}
		},
		watch: {
			styles: {
				files: ['public/styles/**/*.less', 'public/images/*.*'],
				tasks: ['less'],
				options: {
					spawn: false,
					livereload: true
				}
			},
			scripts: {
				files: ['*.json', '*.js', 'routes/*.js', 'services/*.js', 'public/scripts/*.js', 'views/*.jade'],
				tasks: ['jshint'],
				options: {
					spawn: false,
					interval: 1000,
					livereload: true
				}
			}
		},
		favicons: {
			options: {
				html: 'views/_favicons.jade',
				HTMLPrefix: '/public/images/',
				tileColor: 'none',
				appleTouchBackgroundColor: 'white'
			},
			icons: {
				src: 'public/images/logo.png',
				dest: 'public/images'
			},
		},
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-nodemon');
	grunt.loadNpmTasks('grunt-concurrent');
	grunt.loadNpmTasks('grunt-contrib-watch');
	// grunt.loadNpmTasks('grunt-favicons');

	grunt.registerTask('default', ['concurrent:dev']);	
	// grunt.registerTask('build', ['favicons']);
};