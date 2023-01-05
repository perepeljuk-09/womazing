const ADD_ITEM = 'ADD_ITEM';
const REMOVE_ITEM = 'REMOVE_ITEM';
const UPDATE_ITEM = 'UPDATE_ITEM';


const initialState = {
    goods: [],
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM:
            const itemIndex = state.goods.findIndex(item => item.id === action.obj.id
                && item.size === action.obj.size
                && item.color === action.obj.color)
            if(itemIndex >= 0) {
                return {
                    ...state,
                    goods: [...state.goods.map((item, index) => index === itemIndex
                        ? {...item, itemsCount: item.itemsCount + action.obj.itemsCount}
                        : item
                    )]
                }
            } else {
                return {
                    ...state,
                    goods: [...state.goods, action.obj]
                }
            }
        case REMOVE_ITEM:
            return {
                ...state,
                goods: [...state.goods.filter(item => {
                    if (item.id === action.id) {
                        if(item.size === action.size && item.color === action.color) {
                            return false
                        } else {
                            return true
                        }
                    } else {
                        return true
                    }
                })]
            }
        case UPDATE_ITEM:
            return {
                ...state,
                goods: [...state.goods.map(item => item.id === action.id && item.size === action.size && item.color === action.color
                    ? {...item, itemsCount: action.newCount === 0 ? 1 : action.newCount }
                    : {...item})]
            }

        default : return state
    }
}

export const addItem = (obj) => ({type: ADD_ITEM, obj})
export const removeItem = (id, size, color) => ({type: REMOVE_ITEM, id, size, color})
export const updateItem = (id, newCount, size, color) => ({type: UPDATE_ITEM, id, newCount, size, color})

export {cartReducer};