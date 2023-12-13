'use strict';

const fs = require('fs');
const path = require('path');

/**
 * Cargar archivo
 * Carga un archivo desde la nube o localmente.
 *
 * @param {Long} id_archivo_guardado - ID del archivo a cargar
 * @param {String} ubicacion - Ubicación del archivo (local o nube)
 * @returns {Promise} - Resuelve con el contenido del archivo cargado
 */
exports.cargarArchivo = function (id_archivo_guardado, ubicacion) {
  return new Promise(function (resolve, reject) {
    // Comprueba la ubicación del archivo
    var filePath = path.join(process.cwd(), `/${ubicacion}/${id_archivo_guardado}.txt`);
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        err.status = 404;
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};


/**
 * Eliminar archivo
 * Elimina un archivo de la nube o localmente.
 *
 * id Long ID del archivo a eliminar
 * ubicacion String Ubicación del archivo (local o nube)
 * no response value expected for this operation
 **/
exports.eliminarArchivo = function(id,ubicacion) {
  return new Promise(function (resolve, reject) {
    // Comprueba la ubicación del archivo
    var filePath = path.join(process.cwd(), `/${ubicacion}/${id}.txt`);
    console.log(`File exists:${fs.existsSync(filePath)}\n`); 
    if (fs.existsSync(filePath)) {
      fs.unlink(filePath, (err) => {
        if (err) {
          reject(err);
        } else {
          console.log("File deleted successfully\n"); 
          resolve();
        }
      });
    } else {
      const error = new Error("Error: El archivo de guardado no existe.");
      error.status=404;
      reject(error);
    }
    
  });
}


/**
 * Guardar archivo
 * Guarda un archivo especificado en la nube o localmente. Si ya existía se sobreescribe.
 *
 * body ArchivoGuardado 
 * ubicacion String Ubicación del archivo (local o nube)
 * no response value expected for this operation
 **/
exports.guardarArchivo = function(body,ubicacion) {
  return new Promise(function(resolve, reject) {
    var filePath = path.join(process.cwd(), `/${ubicacion}/${body.id_archivo_guardado}.txt`);
    
    fs.writeFile(filePath, JSON.stringify(body.datos), 'utf8', (err) => {
      if (err) {
        console.log(err); 
        reject(err);
      } else {
        console.log("File written successfully\n"); 
        resolve();
      }
    });
  });
}

