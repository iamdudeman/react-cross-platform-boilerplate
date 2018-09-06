import PropTypes from 'prop-types';
import React from 'react';

function blah() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('waited for async');
    }, 2000);
  });
}

async function daBlah() {
  let test = await blah();

  console.log(test); // eslint-disable-line no-console
}

class Counter extends React.Component {
  test() {
    daBlah();

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
