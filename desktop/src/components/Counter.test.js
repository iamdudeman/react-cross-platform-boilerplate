import { shallow } from 'enzyme';
import assert from 'assert';
import Counter from './Counter';
import React from 'react';
import sinon from 'sinon';

describe('Counter', () => {
  let props = {};

  beforeEach(() => {
    props.count = 0;
    props.onClickDecrement = sinon.stub();
    props.onClickIncrement = sinon.stub();
    props.onClickReset = sinon.stub();
  });

  it('should render count', () => {
    const wrapper = shallow(<Counter {...props} count={1} />);

    assert.ok(wrapper.contains(<span>Count: 1</span>));
  });

  it('should be able to click decrement', () => {
    const wrapper = shallow(<Counter {...props} />);

    wrapper.find('#decrement').simulate('click');

    assert.ok(props.onClickDecrement.called);
  });
});
