
export const SEARCH = 'SEARCH';
export const GET_ROBOTS = 'GET_ROBOTS';
export const LOADING_ROBOTS = 'LOADING_ROBOTS';


export const search = (value) => {
    return {
        type:SEARCH,
        payload:value
    }
}

export const getRobots = () => (dispatch, getState) =>{
    console.log(getState());
    dispatch({type:LOADING_ROBOTS})
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>{dispatch({type:GET_ROBOTS, payload:data})})
    .catch(e=>{console.log(e)})

    // return {
    //     type:GET_ROBOTS,
    //     payload:arr
    // }
}