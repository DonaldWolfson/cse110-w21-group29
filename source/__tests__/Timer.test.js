const { Timer } = require('../js/Timer');

test('Check Timers Initialized Values', () => {
  const FiveSecondTimer = new Timer(0, 5, null);
  expect(FiveSecondTimer.parseMinutes()).toBe('00');
  expect(FiveSecondTimer.parseSeconds()).toBe('05');
});
