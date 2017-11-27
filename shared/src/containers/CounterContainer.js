import { connect } from 'react-redux';
import { countActions } from '../actions';

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
