import * as CountActions from '../actions/CountActions';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    count: state.count
  };
};

const mapDispatchToProps = () => {
  return {
    onClickDecrement: () => CountActions.decrement(),
    onClickIncrement: () => CountActions.increment(),
    onClickReset: () => CountActions.reset()
  };
};

/**
 * Container component that provides a presentational component the listed props.
 * @property {Object} props
 * @property {number} props.count
 * @property {function} props.onClickDecrement
 * @property {function} props.onClickIncrement
 * @property {function} props.onClickReset
 */
export default connect(mapStateToProps, mapDispatchToProps);
