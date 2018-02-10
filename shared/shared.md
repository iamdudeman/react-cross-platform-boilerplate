# shared
Shared is where all of the code that can be reused across platforms exists. This includes the store, actions, reducers, and containers.

## Store
The store is where all of the reducers are combined for a unified export that can be used for the react-redux Provider.

```jsx
import { store } from 'shared/src/store';
import App from './App';

<Provider store={store}>
  <App />
</Provider>
```

It also contains the dispatch method that is used in the actions files. This is done so that it is easier to deal with async actions.


## Actions
Actions are what will eventually be hooked up to the Container Components. They typically include the dispatch function from Store and then export a method that calls dispatch.

```js
import { dispatch } from '../store';

export const decrement = () => {
  dispatch({ type: 'DECREMENT_COUNT' });
};
```

#### Testing Actions
Testing actions is pretty straight forward. Simply mock the dispatch on store using sinon and check that the data is passed through dispatch as expected.

```js
describe('decrement', () => {
  it('should dispatch DECREMENT_COUNT', () => {
    count.decrement();

    assert.ok(store.dispatch.calledWith({
      type: 'DECREMENT_COUNT'
    }));
  });
});
```

## Reducers
Reducers are what will modify the state of the Store. They should initialize the state to a value and then return a new state whenever an action happens. A common pattern for this is the use of the "action.type" in a switch statement.

```js
const count = (state = 0, action) => {
  switch (action.type) {

  case 'DECREMENT_COUNT':
    return state - 1;
  default:
    return state;
  }
};

export default count;
```

Once you have your reducer ready be sure to add it to store.js!

```js
import count from './reducers/count';

const reducers = combineReducers({
  count
});
```

#### Testing Reducers
Testing reducers is also straight forward. Call the reducer function with the object you would like to test and ensure that the returned state is as expected.

```js
describe('count reducer', () => {
  it('should increment', () => {
    let result = count(0, {type: 'INCREMENT_COUNT'});

    assert.equal(result, 1);
  });
});
```


## Containers
The way that a Container is constructed is pretty typical for react-redux. However the binding to a presentational component is not done here. This is so that the containers defined here can be used across any platform. This allows us to keep the state and dispatch prop bindings for free. A standard container will look like the code snippet below.

```js
import * as countActions from '../actions/count';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    count: state.count
  };
};

const mapDispatchToProps = () => {
  return {
    onClickDecrement: () => countActions.decrement(),
    onClickIncrement: () => countActions.increment(),
    onClickReset: () => countActions.reset()
  };
};

const CounterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default CounterContainer;
```

#### Testing Containers
Containers are not tested in this project since they are essentially covered by React PropTypes on the bound presentational component.

## Running Tests
Tests can be run with two different commands below. To add a new test to the shared test suite simply require it in the shared/testConfig.js file.

```
# Runs only tests defined in shared/testConfig.js
npm run shared:test

# Runs all test suites
npm run all:test
```
