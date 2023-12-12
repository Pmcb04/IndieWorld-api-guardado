'use strict';

const fs = require('fs/promises');
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
    if (ubicacion === 'local') {
      // Si la ubicación es local, lee el archivo localmente
      const filePath = path.join(__dirname, `local/${id_archivo_guardado}.txt`);
      
      fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    } else if (ubicacion === 'nube') {
      const filePath = path.join(__dirname, `nube/${id_archivo_guardado}.txt`);
      
      fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    } else {
      // Si la ubicación no es 'local' ni 'nube', rechaza la promesa con un mensaje de error.
      reject(new Error('Ubicación no válida. Debe ser "local" o "nube".'));
    }
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
    if (ubicacion === 'local') {
      // Si la ubicación es local, elimina el archivo localmente
      const filePath = path.join(__dirname, `local/${id}.txt`);
      
      fs.unlink(filePath, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    } else if (ubicacion === 'nube') {
      // Si la ubicación es nube, elimina el archivo del cloud
      const filePath = path.join(__dirname, `nube/${id}.txt`);
      
      fs.unlink(filePath, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    } else {
      // Si la ubicación no es 'local' ni 'nube', rechaza la promesa con un mensaje de error.
      reject(new Error('Ubicación no válida. Debe ser "local" o "nube".'));
    }
  });
}


/**
 * Guardar archivo
 * Guarda un archivo especificado en la nube o localmente.
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
        reject(err);
      } else {
        resolve();
      }
    });
  });
}

