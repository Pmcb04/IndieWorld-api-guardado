'use strict';

var utils = require('../utils/writer.js');
var Datos = require('../service/DatosService');

module.exports.cargarArchivo = function cargarArchivo (req, res, next, id_archivo_guardado, ubicacion) {
  Datos.cargarArchivo(id_archivo_guardado, ubicacion)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.eliminarArchivo = function eliminarArchivo (req, res, next, id, ubicacion) {
  Datos.eliminarArchivo(id, ubicacion)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.guardarArchivo = function guardarArchivo (req, res, next, body, ubicacion) {
  Datos.guardarArchivo(body, ubicacion)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
