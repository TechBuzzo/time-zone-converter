const { convertTimeAtZone, convertDateToZone } = require('../src/index');

test('converts time from Montevideo to UTC', () => {
  const result = convertTimeAtZone({
    timeZone: 'America/Montevideo',
    time: '15:00',
    baseDate: new Date('2024-09-12T12:00:00.000Z')
  });
  expect(result).toBe('2024-09-12T18:00:00.000Z');
});

test('converts date to Montevideo timezone', () => {
  const result = convertDateToZone('America/Montevideo', new Date('2024-09-12T12:00:00.000Z'));
  expect(result).toBe('2024-09-12T09:00:00.000Z'); // Resultado esperado basado en el cambio de zona horaria
});
