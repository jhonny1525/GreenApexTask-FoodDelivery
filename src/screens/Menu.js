import React, {Component} from 'react'
import {connect} from 'react-redux'

import {SafeAreaView,FlatList,View} from "react-native"

import menu_data from "../constants/menudata"
import {addToCart, initializeMenuItems, removeFromCart} from "../actions/menu.actions"
import ActionBar from "../components/ActionBar"
import MenuItem from "../components/MenuItem"

import Ionicons from 'react-native-vector-icons/Ionicons'

class Menu extends Component {

    componentDidMount() {
        const { initializeMenuItems } = this.props
        let {menu} = menu_data
        let AllItems = []
        menu.forEach((mi)=>{
            AllItems.push(...mi.items)
        })
        initializeMenuItems(AllItems)
    }

    addToCart(id){
        this.props.addToCart(id)
    }

    removeFromCart(id){
        this.props.removeFromCart(id)
    }

    navigateToCart(){
        this.props.navigation.navigate("Cart")
    }

    render() {
        let {cart} = this.props
        return (
            <SafeAreaView style={{flex:1,backgroundColor:'#f8f8f8'}} >
                <ActionBar
                    title={'Menu'}
                    nav={'none'}
                    Action={() => <Ionicons
                        size={24}
                        color={'black'}
                        name={'cart'}
                        onPress={ () => {this.navigateToCart()}}
                    />}
                />
                <FlatList
                    contentContainerStyle={{justifyContent:'center',alignItems:'center'}}
                    data={this.props.menuItems}
                    renderItem={({item})=> {
                        return <MenuItem
                            quantity={cart.find((o) => o.id === item.id)?.quantity}
                            onRemoveItem={() => { this.removeFromCart(item.id) }}
                            onAddItem={ () => {this.addToCart(item.id)} }
                            {...item} />
                    }  }
                    keyExtractor={(item) => item.id}
                    numColumns={2}
                    ItemSeparatorComponent={() => <View style={{height:20}} />}
                />
            </SafeAreaView>
        )
    }
}

const mapStateToProps = (state) => ({
    menuItems:state.menu.menuItems,
    cart:state.menu.cart
})

const mapDispatchToProps = (dispatch) => ({
    initializeMenuItems: (items) => dispatch(initializeMenuItems(items)),
    addToCart: _id => dispatch(addToCart(_id)),
    removeFromCart: _id => dispatch(removeFromCart(_id))
})

export default connect(mapStateToProps,mapDispatchToProps)(Menu)
