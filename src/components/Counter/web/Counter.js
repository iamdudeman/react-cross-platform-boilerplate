import React from 'react';
// import PropTypes from 'prop-types';

// function blah() {
//   return Promise.resolve('async');
// }

// async function daBlah() {
//   return await blah();
// }

class Counter extends React.Component {
  test() {
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

};

export default Counter;
