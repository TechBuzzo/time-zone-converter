const { formatInTimeZone } = require('date-fns-tz');

/**
 * Convierte la hora de una zona horaria a otra o a UTC si no se especifica la zona horaria de destino.
 * @param {Object} config - Objeto de configuración para la conversión de zona horaria.
 * @param {string} config.timeZone - Zona horaria de origen en formato IANA.
 * @param {string} config.time - Hora en formato "HH:mm".
 * @param {Date} [config.baseDate=new Date()] - Fecha base para la conversión.
 * @returns {string} - La hora convertida en formato ISO.
 */
const convertTimeAtZone = ({ timeZone, time, baseDate = new Date() }) => {
  // Validar o convertir baseDate a un objeto Date si es necesario
  if (!(baseDate instanceof Date) || isNaN(baseDate.valueOf())) {
    if (typeof baseDate === 'string' || typeof baseDate === 'number') {
      baseDate = new Date(baseDate);
      if (isNaN(baseDate.valueOf())) {
        throw new Error("baseDate is invalid and couldn't be converted to a Date object.");
      }
    } else {
      throw new Error("baseDate must be a Date object or a valid date string/number.");
    }
  }

  // Asumir que baseDate es ahora válido y proceder
  const [hours, minutes] = time.split(':');
  baseDate.setHours(parseInt(hours), parseInt(minutes), 0, 0);

  // Intentar formatear la fecha en la zona horaria del servidor en formato ISO
  try {
    return formatInTimeZone(
      baseDate,
      timeZone,
      "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'",
      { timeZone: 'UTC' }
    );
  } catch (error) {
    throw new Error("Error formatting date: " + error.message);
  }
};

/**
 * Convierte una fecha completa a la zona horaria especificada.
 * @param {string} timeZone - Zona horaria de destino en formato IANA.
 * @param {Date} date - Fecha a convertir.
 * @returns {string} - La fecha convertida en formato ISO.
 */
const convertDateToZone = (timeZone, date = new Date()) => {
  // Validar que la fecha sea válida
  if (!(date instanceof Date) || isNaN(date.valueOf())) {
    throw new Error("Invalid date.");
  }

  try {
    return formatInTimeZone(
      date,
      timeZone,
      "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'",
      { timeZone: 'UTC' }
    );
  } catch (error) {
    throw new Error("Error formatting date: " + error.message);
  }
};

// Exportar ambas funciones dentro de un objeto para poder expandir en el futuro
module.exports = {
  convertTimeAtZone,
  convertDateToZone
};
