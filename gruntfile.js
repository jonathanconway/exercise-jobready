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
		sass: {
			dev: {
				files: [{
					expand: true,
					cwd: 'public/styles',
					src: ['**/*.scss'],
					dest: 'public/styles',
					ext: '.css'
				}],
				options: {
					debugInfo: true
				}
			},
		},
		nodemon: {
			dev: {
				script: 'server.js',
				options: {
					args: ['dev'],
					ext: '*.js,*.jade'
				}
			}
		},
		concurrent: {
			dev: ['jshint', 'sass', 'nodemon', 'watch'],
			options: {
				logConcurrentOutput: true
			}
		},
		watch: {
			sass: {
				files: ['public/styles/*.scss', 'public/images/*.jpg'],
				tasks: ['sass'],
				options: {
					spawn: false,
					livereload: true
				}
			},
			scripts: {
				files: ['*.js', 'public/scripts/*.js', 'views/*.jade'],
				tasks: ['jshint'],
				options: {
					spawn: false,
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
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-nodemon');
	grunt.loadNpmTasks('grunt-concurrent');
	grunt.loadNpmTasks('grunt-contrib-watch');
	// grunt.loadNpmTasks('grunt-favicons');

	grunt.registerTask('default', ['concurrent:dev']);	
	// grunt.registerTask('build', ['favicons']);
};