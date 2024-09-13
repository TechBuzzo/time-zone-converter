const { formatInTimeZone } = require('date-fns-tz');

/**
 * Convierte la hora de una zona horaria a otra o a UTC si no se especifica la zona horaria de destino.
 * @param {Object} config - Objeto de configuración para la conversión de zona horaria.
 * @param {string} config.timeZone - Zona horaria de origen en formato IANA.
 * @param {string} config.time - Hora en formato "HH:mm".
 * @param {Date} [config.baseDate=new Date()] - Fecha base para la conversión.
 * @returns {Promise<string>} - Promesa que resuelve la hora convertida en formato ISO o rechaza con un error.
 */
const convertTimeZone = ({ timeZone, time, baseDate = new Date() }) => {
  return new Promise((resolve, reject) => {
    // Validar o convertir baseDate a un objeto Date si es necesario
    if (!(baseDate instanceof Date) || isNaN(baseDate.valueOf())) {
      if (typeof baseDate === 'string' || typeof baseDate === 'number') {
        baseDate = new Date(baseDate);
        // Verificar si la conversión fue exitosa
        if (isNaN(baseDate.valueOf())) {
          reject(new Error("baseDate is invalid and couldn't be converted to a Date object."));
          return;
        }
      } else {
        reject(new Error("baseDate must be a Date object or a valid date string/number."));
        return;
      }
    }

    // Asumir que baseDate es ahora válido y proceder
    const [hours, minutes] = time.split(':');
    baseDate.setHours(parseInt(hours), parseInt(minutes), 0, 0);

    // Intentar formatear la fecha en la zona horaria del servidor en formato ISO
    try {
      const formattedDate = formatInTimeZone(
        baseDate,
        timeZone,
        "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'",
        { timeZone: 'UTC' }
      );
      resolve(formattedDate);
    } catch (error) {
      reject(new Error("Error formatting date: " + error.message));
    }
  });
}

module.exports = convertTimeZone;
