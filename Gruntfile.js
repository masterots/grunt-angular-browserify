module.exports = function(grunt) {
  var sharedModules = [
    'babelify/polyfill',
    'angular'
  ];

  grunt.initConfig({

    browserify: {
      app: {
        files: {
          'build/app.js': ['src/app.js']
        },
        options: {
          external: sharedModules,
          watch: true,
          transform: [
            'babelify'
          ]
        }
      },
      lib: {
        files: {
          'build/lib.js': ['.']
        },
        options: {
          require: sharedModules
        }
      }
    },

    watch: {
      react: {
        files: ['src/**/*.js'],
        tasks: []
      }
    }
  });

  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-watchify');

  grunt.registerTask('default', ['browserify', 'watch']);
};
