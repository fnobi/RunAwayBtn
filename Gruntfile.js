module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-release');

    // init
    grunt.initConfig({
        release: {
            options: {
                file: 'bower.json',
                npm: false
            }
        }
    });

    grunt.registerTask('default', []);
};
