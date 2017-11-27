import count from './count';
import assert from 'assert';

describe('count reducer', () => {
  it('should increment', () => {
    let result = count(0, {type: 'INCREMENT_COUNT'});

    assert.equal(result, 1);
  });
});
