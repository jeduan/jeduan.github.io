module.exports = function (grunt) {
  require('time-grunt')(grunt)
  require('load-grunt-tasks')(grunt)

  grunt.initConfig({
    sass: {
      dev: {
        files: {
          'tmp/main.css': 'sass/screen.scss'
        }
      }
    },
    concat: {
      css: {
        src: [
          'bower_components/pure/pure.css',
          'bower_components/bigfoot/dist/bigfoot-default.css',
          'css/syntax.css',
          'tmp/main.css'
        ],
        dest: 'assets/main.css'
      },
      js: {
        src: [
          'bower_components/jquery/dist/jquery.js',
          'bower_components/bigfoot/dist/bigfoot.js'
        ],
        dest: 'assets/vendor.js'
      }
    },
    cssmin: {
      dist: {
        src: 'assets/main.css',
        dest: 'assets/main.css'
      }
    },
    copy: {
      css: {
        src: 'assets/main.css',
        dest: '_site/assets/main.css'
      }
    },
    clean: ['tmp'],
    shell: {
      jekyll: {
        command: 'rm -rf _site/*; bundle exec jekyll build',
        stdout: true
      }
    },
    watch: {
      options: {
        livereload: true
      },
      sass: {
        files: [
          'sass/*.scss',
          'bower_components/*'
        ],
        tasks: ['process-css']
      },
      jekyll: {
        files: [
          '_layouts/*.html',
          'assets/js/*.js',
          '**/*.md',
          '!_site/**/*.md',
          '_config.yml',
          'index.html',
          '404.html'
        ],
        tasks: ['shell:jekyll'],
      },
    },
    uglify: {
      target: {
        files: {
          'assets/vendor.js': 'assets/vendor.js'
        }
      }
    },
    connect: {
      server: {
        options: {
          base: '_site',
          port: 4000
        }
      }
    },
    open: {
      server: {
        path: 'http://localhost:<%= connect.server.options.port %>'
      }
    }
  })

  grunt.registerTask('default', [
    'shell:jekyll',
    'connect:server',
    'watch'
  ])

  grunt.registerTask('process-css', ['sass', 'concat', 'cssmin',
  'uglify','copy', 'clean'])
}
