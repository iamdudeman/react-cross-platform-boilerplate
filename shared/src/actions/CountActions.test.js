import * as CountActions from './CountActions';
import * as store from '../store';
import assert from 'assert';
import sinon from 'sinon';

describe('CountActions', () => {
  let sandbox = sinon.sandbox.create();

  beforeEach(() => {
    sandbox.stub(store, 'dispatch');
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe('decrement', () => {
    it('should dispatch DECREMENT_COUNT', () => {
      CountActions.decrement();

      assert.ok(store.dispatch.calledWith({
        type: 'DECREMENT_COUNT'
      }));
    });
  });

  describe('increment', () => {
    it('should dispatch INCREMENT_COUNT', () => {
      CountActions.increment();

      assert.ok(store.dispatch.calledWith({
        type: 'INCREMENT_COUNT'
      }));
    });
  });

  describe('reset', () => {
    it('should dispatch RESET_COUNT', () => {
      CountActions.reset();

      assert.ok(store.dispatch.calledWith({
        type: 'RESET_COUNT'
      }));
    });
  });
});
