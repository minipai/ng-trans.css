module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        files: {
          'ng-trans.css': 'source/ng-trans.scss',
          'document/ng-trans.css': 'source/ng-trans.scss',
        }
      }
    },
    watch: {
      css: {
        files: '**/*.scss',
        tasks: ['sass']
      }
    },
    connect: {
      server: {
        options: {
          port: 9002,
          base: 'document'
        }
      }
    }

  });
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default',['connect', 'watch']);
}