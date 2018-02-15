import assert from 'assert';
import countReducer from './countReducer';

describe('countReducer', () => {
  it('should increment', () => {
    let result = countReducer(0, {type: 'INCREMENT_COUNT'});

    assert.equal(result, 1);
  });
});
