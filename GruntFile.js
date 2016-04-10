module.exports = function(grunt) {
  grunt.initConfig({
    lintspaces: {
      all: {
        src: ['**/*', '!node_modules/**/*'],
        options: {
          editorconfig: '.editorconfig'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-lintspaces');

  //Ensure that all snippet shortcuts are unique.
  grunt.registerTask('prefixconflict', function(){
    var snippetFiles = grunt.file.expand('snippets/**/*');
    var prefixKeys = [];
    snippetFiles.forEach(function(snippetFilePath){
      //If path is to a snippet config file get file content
      if(snippetFilePath.indexOf('.cson') !== -1){
        var snippetFileContent = grunt.file.read(snippetFilePath);
        var asArray = snippetFileContent.split('\n');
        if(typeof asArray[2] !== 'undefined'){
          var prefixKey = asArray[2].split(':')[1].trim();
          if(prefixKeys.indexOf(prefixKey) == -1){
            prefixKeys.push(prefixKey);
          }
          else {
            grunt.log.error(prefixKey + 'already exists');
            return false;
          }
        }

      }
    });
  })
  grunt.registerTask('default', ['prefixconflict','lintspaces']);
};
