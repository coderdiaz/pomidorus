import Pending, { DEFAULT_INTERVAL } from './pending';

jest.useFakeTimers();

const tick = () => jest.runTimersToTime(DEFAULT_INTERVAL);
let pending = null;

beforeEach(() => {
  pending = new Pending();
});

describe('tick()', () => {
  describe('when started', () => {
    test('should just increment state on every tick', () => {
      pending.start();

      expect(pending.state).toBe(0);
      tick();
      expect(pending.state).toBe(1);
    });
  });

  describe('when stopped', () => {
    it('should not increment state on every tick', () => {
      pending.stop();

      expect(pending.state).toBe(0);
      tick();
      expect(pending.state).toBe(0);
    });
  });
});