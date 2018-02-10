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
