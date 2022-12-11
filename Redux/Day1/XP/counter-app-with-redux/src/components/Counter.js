import {connect} from 'react-redux'
// import { increaseCount, decreaseCount} from '../actions'
import Increase from './Increase'
import Decrease from './Decrease'

const Counter = props =>{
    return(
        <div>
            <Decrease/>
            {/* <button onClick={props.increaseCount} >+</button> */}
            <span>{props.count}</span>
            {/* <button onClick={props.decreaseCount}>-</button> */}
            <Increase/>
        </div>
    )
}

    const mapStateToProps = (state) => {
        return {
            count: state.count
        }
    }

    // const mapDispatchToProps = (dispatch) => {
    //     return {
    //         increaseCount: ()=>dispatch(increaseCount()),
    //         decreaseCount:()=>dispatch(decreaseCount())
    //     }
    // }


    // const mapDispatchToProps = (dispatch) => {
    //     return {
    //         increaseCount,
    //         decreaseCount
    //     },
    //     dispatch
    // }
export default connect(mapStateToProps)(Counter)
// export default connect(mapStateToProps, mapDispatchToProps)(Counter)
