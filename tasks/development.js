module.exports = function (grunt) {
  grunt.config.merge({
    connect: {
      server: {
        options: {
          base: {
            path: "build",
            options: {
              index: "index.html",
              maxAge: 300000
            }
          },
          livereload: true
        }
      }
    },
    watch: {
      sources: {
        options: {
          livereload: true
        },
        files: ["*.css", "app.js", "lib/**/*.js", "*.html"],
        tasks: ["default"]
      },
      config: {
        options: {
          reload: true
        },
        files: ["Gruntfile.js", "tasks/*.js"],
        tasks: []
      }
    }
  })

  grunt.loadNpmTasks("grunt-contrib-connect")
  grunt.loadNpmTasks("grunt-contrib-watch")
}
