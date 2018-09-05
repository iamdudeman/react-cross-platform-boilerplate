import PropTypes from 'prop-types';
import React from 'react';

function blah() {
  return Promise.resolve('waiting for async');
}

async function daBlah() {
  return await blah();
}

class Counter extends React.Component {
  test() {
    console.log(daBlah()); // eslint-disable-line no-console
    null?.thing();
    null ?? console.log('null'); // eslint-disable-line no-console
    false ?? console.log('not null'); // eslint-disable-line no-console

    return <div>test</div>;
  }

  renderThing = () => {
    return <div>thing</div>;
  }

  render() {
    return <div>{this.test()}{this.renderThing()}</div>;
  }
}

Counter.propTypes = {
  meh: PropTypes.string,
};

export default Counter;
