import { getpoint, Point } from '../src/Point';
import assert from 'assert';

describe('Array', () => {
  describe('#Index Of', () => {
    it('should return -1 when the value is not present', () => {
      assert.strictEqual([1, 2, 3].indexOf(4), -1);
    });
  });
});

describe('Point', () => {
  describe('getpoint', () => {
    it('should return object with fields', () => {
      let point: Point = getpoint();
      assert(typeof point.description === "string");
      assert(point.data instanceof Array);
    });
  });
});

describe('level 1', () => {
  describe('level 2', () => {
    describe('level 3', () => {
      it('my test', () => {
        assert.ok(true);
      });
    });
  });
});
