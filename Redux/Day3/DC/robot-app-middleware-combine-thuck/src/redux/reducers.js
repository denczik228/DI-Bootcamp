import { combineReducers } from 'redux';
import {SEARCH, GET_ROBOTS} from './actions'
import {reducer_robots} from './reducerRobots'

const initState= {
    // robots: [],
    text:''
}


export const reducer_search = (state=initState,action={}) =>{
    switch (action.type){
        case SEARCH:
            return {...state, text:action.payload};
        default:
            return {...state}
    }   
}


// export const reducer_robots = (state=initState,action={}) =>{
//     switch (action.type){
//         case GET_ROBOTS:
//             return {...state, robots:action.payload};
//         default:
//             return {...state}
//     }   
// }

const rootReducer = combineReducers({
   reducer_search,
   reducer_robots 
})

export default rootReducer