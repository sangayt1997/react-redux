import classes from './counter.module.css';
import { useDispatch, useSelector, connect } from "react-redux";
import { counterActions } from "../../store/redux";
// import { Component } from "react";

const Counter = () => {
    const dispatch = useDispatch();
    const counter = useSelector(state => state.counter);
    const show = useSelector(state => state.showCounter);

    const increaseHandler = () => {
        // dispatch({ type: 'increase', value: 5 });
        dispatch(counterActions.increase(5)); // {type: SOME_UNIQUE_IDENTIFIER, store the value in payload}
    };
    const incrementHandler = () => {
        // dispatch({ type: 'increment' });
        dispatch(counterActions.increment());
    };
    const decrementHandler = () => {
        // dispatch({ type: 'decrement' });
        dispatch(counterActions.decrement());
    };
    const toggleCounterHandler = () => {
        // dispatch({ type: 'toggle' });
        dispatch(counterActions.toggleCounter());
    };

    return (
        <main className={classes.counter}>
            <h1>Redux Counter</h1>
            {show &&  <div className={classes.value}>{counter}</div>}
            <div>
                <button onClick={incrementHandler}>Increment</button>
                <button onClick={increaseHandler}>Increase by 5</button>
                <button onClick={decrementHandler}>Decrement</button>
            </div>
            <button onClick={toggleCounterHandler}>Toggle Counter</button>
        </main>
    );
};

/*Using redux in class based component in react*/
/*class Counter extends Component {
    counter;
    incrementHandler() {
        this.props.increment();
    }
    decrementHandler() {
        this.props.decrement();
    }

    toggleCounterHandler() {

    }

    render() {
        return (
            <main className={classes.counter}>
                <h1>Redux Counter</h1>
                <div className={classes.value}>{this.props.counter}</div>
                <div>
                    <button onClick={this.incrementHandler.bind(this)}>Increment</button>
                    <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
                </div>
                <button onClick={this.toggleCounterHandler.bind(this)}>Toggle Counter</button>
            </main>
        );
    }
}

const mapStateToProps = state => {
    return {
        counter: state.counter,
    };
}

const mapDispatchToProps = dispatch => {
    return {
        increment: () => dispatch({ type: 'increment'} ),
        decrement: () => dispatch({ type: 'decrement' })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter);*/
export default Counter;
