module.exports = function(grunt) {



  require('load-grunt-tasks')(grunt);



  grunt.initConfig({



    sass: {
      // options: {
      //   sourceMap: true
      // },
      dist: {
        files: {
          'css/style.css': 'scss/style.scss'
        }
      }
    },




    autoprefixer: {
      options: {
        browsers: ['last 2 versions']
      },
      style: {
        src: 'css/style.css'
      }
    },



    cmq: {
      style: {
        files: {
          'css/style.css': ['css/style.css']
        }
      }
    },



    watch: {
      style: {
        files: ['scss/**/*.scss'],
        tasks: ['style'],
        options: {
          spawn: false,
          livereload: true
        },
      },
      html: {
        files: ['*.html'],
        options: {
          spawn: false,
          livereload: true
        },
      },
    }

  });



  grunt.registerTask('default', [
    'sass',
    'autoprefixer',
    'cmq',
    'watch'
  ]);



  grunt.registerTask('style', [
    'sass',
    'autoprefixer',
    'cmq',
  ]);

};