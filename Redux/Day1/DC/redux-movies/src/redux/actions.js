export const DETAIL='DETAIL'

export const showDetail = (obj) => {
    return{
        type:DETAIL,
        payload:obj
    }
}