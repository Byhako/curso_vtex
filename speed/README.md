# En Gruntfile.coffe 

* borrar lineas de 60 a 83.
* borrar lineas de 210 a 212.
* modificar copy, linea 60.
* modificar coffe, linea 69.
* modificar sass, linea 80.
* min, less, cssmin, uglify, imagemin

# configurar grunt-contrib-concat

options:
  separator: '\n'
dist:
  src: ['src/javascripts/plugins/*.js', 'src/javascripts/functions/*.js', 'src/javascripts/global.js']
  dest: "build/arquivos/#{pkg.accountName}.js"

