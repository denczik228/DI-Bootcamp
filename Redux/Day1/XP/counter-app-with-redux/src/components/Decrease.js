import {connect} from 'react-redux'
import { decreaseCount, DECREASE_COUNT} from '../actions'

// const Decrease = (props) => {
//     return(
//         <button onClick={props.decreaseCount}>-</button>
//     )
// }

//     const mapDispatchToProps = (dispatch) => {
//         return {
//             decreaseCount:()=>dispatch(decreaseCount())
//         }
//     }

// export default connect(null, mapDispatchToProps)(Decrease)

////////////////
//another Wey 
////////////////
// import {connect} from 'react-redux'

const Decrease = (props) => {
    return(
        // <button onClick={()=>props.dispatch({type: DECREASE_COUNT})}>-</button>
        <button onClick={()=>props.dispatch(decreaseCount())}>-</button>
    )
}

export default connect()(Decrease)