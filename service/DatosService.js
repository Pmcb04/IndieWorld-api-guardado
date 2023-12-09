'use strict';


/**
 * Cargar archivo
 * Carga un archivo desde la nube o localmente.
 *
 * id_archivo_guardado Long ID del archivo a cargar
 * ubicacion String Ubicación del archivo (local o nube)
 * no response value expected for this operation
 **/
exports.cargarArchivo = function(id_archivo_guardado,ubicacion) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Eliminar archivo
 * Elimina un archivo de la nube o localmente.
 *
 * id Long ID del archivo a eliminar
 * ubicacion String Ubicación del archivo (local o nube)
 * no response value expected for this operation
 **/
exports.eliminarArchivo = function(id,ubicacion) {
  return new Promise(function(resolve, reject) {
    resolve();
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
    resolve();
  });
}

