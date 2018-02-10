import * as count from './count';
import * as store from '../store';
import assert from 'assert';
import sinon from 'sinon';

describe('count actions', () => {
  let sandbox = sinon.sandbox.create();

  beforeEach(() => {
    sandbox.stub(store, 'dispatch');
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe('decrement', () => {
    it('should dispatch DECREMENT_COUNT', () => {
      count.decrement();

      assert.ok(store.dispatch.calledWith({
        type: 'DECREMENT_COUNT'
      }));
    });
  });

  describe('increment', () => {
    it('should dispatch INCREMENT_COUNT', () => {
      count.increment();

      assert.ok(store.dispatch.calledWith({
        type: 'INCREMENT_COUNT'
      }));
    });
  });

  describe('reset', () => {
    it('should dispatch RESET_COUNT', () => {
      count.reset();

      assert.ok(store.dispatch.calledWith({
        type: 'RESET_COUNT'
      }));
    });
  });
});
