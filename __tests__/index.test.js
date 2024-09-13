const convertTimeZone = require('../src/index');

test('converts time from Montevideo to UTC', () => {
  return convertTimeZone({
    timeZone: 'America/Montevideo',
    time: '15:00',
    baseDate: new Date('2024-09-12T12:00:00.000Z')
  }).then(data => {
    expect(data).toBe('2024-09-12T12:00:00.000Z');
  });
});
