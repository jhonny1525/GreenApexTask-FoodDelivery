import produce from 'immer'
import {ADD_TO_CART, INITIALIZE_MENU_ITEMS, REMOVE_FROM_CART} from "../constants/menu.constants"

const initialState = {
    requesting: true,
    menuItems: [],
    cart: [],
    total: 0
}

const reducer = (state = initialState, action) =>
    produce(state, draft => {
        switch (action?.type) {
            case INITIALIZE_MENU_ITEMS :
                draft.requesting = false
                draft.menuItems = action.items
                return
            case ADD_TO_CART:
                let total = state.cart.reduce((ac,cu) => ac+(cu.price*cu.quantity) ,0)
                let cart_item = draft.cart.filter(o => o.id === action._id)
                if(cart_item.length > 0){
                    cart_item[0].quantity++
                    total+=cart_item[0].price
                }else{
                    let new_item = draft.menuItems.filter(o => o.id === action._id)[0]
                    draft.cart.push({...new_item,quantity:1})
                    total+=new_item.price
                }
                draft.total = total
                return
            case REMOVE_FROM_CART:
                let total_r = state.cart.reduce((ac,cu) => ac+(cu.price*cu.quantity) ,0)
                let cart_item_r = draft.cart.filter(o => o.id === action._id)
                if(cart_item_r.length > 0 && cart_item_r[0].quantity > 1){
                    cart_item_r[0].quantity--
                    total_r-=cart_item_r[0].price
                }else{
                    draft.cart = state.cart.filter(o => o.id !== action._id)
                    total_r-=state.menuItems.filter(o => o.id === action._id)[0].price
                }
                draft.total = total_r
                return
        }
    }
    )


export default reducer
