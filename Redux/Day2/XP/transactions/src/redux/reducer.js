import {INSERT, UPDATE, UPDATE_INDEX, DELETE} from './actions'
import { addToLocalStorage, getFromLocalStorage } from '../helpers/storage'
const initState = {
    list:getFromLocalStorage('trx'),
    currentIndex: -1
}




export const reducer = (state=initState, action={}) =>{
    switch(action.type){
        case INSERT:
            //option 1:
            const newlist=[state.list]
            newlist.push(action.payload)
            addToLocalStorage('trx', newlist)
            console.log(newlist);
            return {...state, list: newlist, currentIndex:-1}
            //option 2:
            // state.newlist.push(action.payload)
            // return {...state, list: [...state.newlist], currentIndex:-1}
        case UPDATE_INDEX:
            // console.log('current index=>', )
            addToLocalStorage('trx', [state.list])

            return {... state, currentIndex:action.payload}
        case UPDATE:
            state.list[state.currentIndex] =action.payload
            return {...state, list:[state.list], currentIndex:-1 }
        case DELETE:
            state.list.splice(action.payload, 1)
            addToLocalStorage('trx', [state.list])
            return {...state, list:[...state.list], currentIndex:-1}
        default:
            return {...state}
    }

}