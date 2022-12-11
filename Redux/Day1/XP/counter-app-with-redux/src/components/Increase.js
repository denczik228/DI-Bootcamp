import {connect} from 'react-redux'
import { increaseCount} from '../actions'

const Increase = (props) => {
    return(
        <button onClick={props.increaseCount}>+</button>
    )
}

    const mapDispatchToProps = (dispatch) => {
        return {
            increaseCount: ()=>dispatch(increaseCount()),
        }
    }

export default connect (null, mapDispatchToProps)(Increase)