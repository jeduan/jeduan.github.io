module.exports = function (grunt) {
  require('time-grunt')(grunt)
  require('load-grunt-tasks')(grunt)

  grunt.initConfig({
    sass: {
      dev: {
        files: {
          'css/main.css': 'sass/screen.scss'
        }
      }
    },
    concat: {
      dist: {
        src: [
          'bower_components/pure/pure.css',
          'css/syntax.css',
          'css/main.css'
        ],
        dest: 'assets/main.css'
      }
    },
    cssmin: {
      dist: {
        src: 'assets/main.css',
        dest: 'assets/main.min.css'
      }
    },
    copy: {
      css: {
        src: 'assets/main.css',
        dest: '_site/assets/main.css'
      }
    },
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
        tasks: ['sass', 'concat', /* 'cssmin',*/ 'copy']
      },
      jekyll: {
        files: [
          '_layouts/*.html',
          'assets/js/*.js',
          '_posts/*.md',
          '*.md',
          '_config.yml',
          'index.html',
          '404.html'
        ],
        tasks: ['shell:jekyll'],
      },
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

  grunt.registerTask('serve', [
    'shell:jekyll',
    'connect:server',
    'open:server',
    'watch'
  ])
}