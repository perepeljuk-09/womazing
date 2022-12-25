const ADD_ITEM = 'ADD_ITEM';
const REMOVE_ITEM = 'REMOVE_ITEM';
const UPDATE_ITEM = 'UPDATE_ITEM';


const initialState = {
    goods: [],
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM:
            return {
                ...state,
                goods: [...state.goods, action.obj]
            }
        case REMOVE_ITEM:
            return {
                ...state,
                goods: [...state.goods.filter(item => item.id !== action.id)]
            }
        case UPDATE_ITEM:
            return {
                ...state,
                goods: [...state.goods.map(item => item.id === action.id ? {...item, itemsCount: action.newCount === 0 ? 1 : action.newCount } : {...item})]
            }

        default : return state
    }
}

export const addItem = (obj) => ({type: ADD_ITEM, obj})
export const removeItem = (id) => ({type: REMOVE_ITEM, id})
export const updateItem = (id, newCount) => ({type: UPDATE_ITEM, id, newCount})

export {cartReducer};