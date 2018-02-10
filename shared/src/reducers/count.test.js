import assert from 'assert';
import count from './count';

describe('count reducer', () => {
  it('should increment', () => {
    let result = count(0, {type: 'INCREMENT_COUNT'});

    assert.equal(result, 1);
  });
});
