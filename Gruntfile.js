module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: [
          'public/js/**/*.js',
          'public/bower_components/jquery/dist/jquery.js',
          'public/bower_components/canjs/can.jquery.js',
          'public/bower_components/canjs/can.route.pushstate.js',
          'pubilc/bower_components/canjs/can.map.backup'
        ],
        dest: 'pubilc/dist.js'
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
          'pubilc/js/app.min.js': ['<%= concat.dist.dest %>']
        }
      }
    },
    connect: {
      dev: {
        options: {
          port: 8000,
          keepalive:true,
          hostname: '0.0.0.0',
          base: '.'
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.registerTask('build', ['concat', 'uglify']);
  grunt.registerTask('default', ['connect:dev']);
};
