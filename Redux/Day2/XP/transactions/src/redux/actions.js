export const INSERT = 'INSERT'
export const UPDATE = 'UPDATE'
export const UPDATE_INDEX = 'UPDATE_INDEX'
export const DELETE = 'DELETE'

export const insert_trx = (trx) => {
    return{
        type:INSERT,
        payload:trx
    }
}

export const update_trx = (data) => {
    return{
        type: 'UPDATE',
        payload: data         
    }
}

export const update_index = (trx) => {
    return{
        type: UPDATE_INDEX,
        payload: trx
    }
}

export const delete_trx = (index) => {
    return{
        type: 'DELETE',
        payload: index        
    }
}