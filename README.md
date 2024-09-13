
# Time Zone Converter

`time-zone-converter` es una librería de Node.js que permite convertir horas específicas entre zonas horarias. Diseñada para ser usada de forma directa mediante una función que acepta un objeto de configuración y devuelve promesas.

## Instalación

```bash
npm install @techbuzzo/time-zone-converter
```

## Uso

Pasa un objeto de configuración a la función `convertTimeZone` y maneja el resultado con promesas:

```javascript
const convertTimeZone = require('@techbuzzo/time-zone-converter');

// Ejemplo de uso básico
convertTimeZone({
    timeZone: 'America/Montevideo',
    time: '15:00'
}).then(result => {
    console.log('Hora convertida:', result);
}).catch(error => {
    console.error('Error:', error);
});
```

## Parámetros de Configuración

- **timeZone** (Requerido): La zona horaria de origen de la hora. Debe ser una cadena que represente una zona horaria válida del estándar IANA.
- **time** (Requerido): La hora en formato "HH:mm" que se desea convertir.
- **baseDate** (Opcional): La fecha base sobre la cual se realizará la conversión. Si no se proporciona, se usa la fecha actual.
- **targetTimeZone** (Opcional): La zona horaria de destino para la conversión. Si no se proporciona, se usa la zona horaria del servidor.

## Características

- **Manejo de Promesas**: Facilita la integración asincrónica y el manejo de errores.
- **Flexibilidad en Zonas Horarias**: Soporta todas las zonas horarias IANA para una conversión precisa.
- **Simplicidad de Uso**: Diseñada para ser usada con un mínimo de configuración y máxima eficiencia.

## Contribuir

Los pull requests son bienvenidos. Para cambios importantes, por favor abre primero un issue para discutir qué te gustaría cambiar. Asegúrate de actualizar las pruebas según corresponda.

## Licencia

Este proyecto está bajo la licencia [MIT](https://choosealicense.com/licenses/mit/). Consulta el archivo `LICENSE` para más detalles.

## Soporte

Si encuentras un bug o tienes alguna sugerencia, no dudes en abrir un *issue* en nuestro repositorio de GitHub.

---
Desarrollado por TechBuzzo - Derechos reservados © 2024
