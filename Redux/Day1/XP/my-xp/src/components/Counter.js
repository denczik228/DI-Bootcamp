import { Connect } from "react-redux";
import { increase_count, decrease_count } from "../actions";

const Counter = props => {
    return (
        <div>
            <button onClick={props.decrease}> - </button>
            {props.count}
            <button onClick={props.increase}> + </button>
        </div>
    )
} 

const mapStateToProps = (state) => {
    return {
        count: state.count
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        increase: () => dispatch(increase_count()),
        decrease: () => dispatch(decrease_count())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
