import {ADD_TO_CART, INITIALIZE_MENU_ITEMS, REMOVE_FROM_CART} from '../constants/menu.constants'

export const initializeMenuItems = (items) => ({
    type: INITIALIZE_MENU_ITEMS,
    items
})

export const addToCart = (_id) => ({
    type: ADD_TO_CART,
    _id
})

export const removeFromCart = (_id) => ({
    type:REMOVE_FROM_CART,
    _id
})
