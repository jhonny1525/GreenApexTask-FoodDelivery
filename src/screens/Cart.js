import React, {Component} from 'react'
import {connect} from 'react-redux'

import {FlatList, SafeAreaView, View,Text,StyleSheet} from "react-native"
import ActionBar from "../components/ActionBar"
import {addToCart, removeFromCart} from "../actions/menu.actions"
import MenuItem from "../components/MenuItem"

class Cart extends Component {

    addToCart(id){
        this.props.addToCart(id)
    }

    removeFromCart(id){
        this.props.removeFromCart(id)
    }


    render() {

        let {cart} = this.props

        return (
            <SafeAreaView style={styles.container} >
                <ActionBar nav={'back'} title={'Cart'} />
                {cart.length > 0 ?<>
                    <FlatList
                    contentContainerStyle={{justifyContent: 'center', alignItems: 'center'}}
                    data={cart}
                    renderItem={({item}) => {
                        return <MenuItem
                            quantity={cart.find((o) => o.id === item.id)?.quantity}
                            onRemoveItem={() => {
                                this.removeFromCart(item.id)
                            }}
                            onAddItem={() => {
                                this.addToCart(item.id)
                            }}
                            {...item} />
                    }}
                    keyExtractor={(item) => item.id}
                    numColumns={2}
                    ItemSeparatorComponent={() => <View style={{height: 20}}/>}
                />
                    <View style={{backgroundColor:'white',height:30,padding:10,marginTop:'auto'}} >
                        <Text>Total : {this.props.total}</Text>
                    </View>
                </> : <View>
                    <Text>Cart Empty</Text>
                </View>
                }
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    }
})

const mapStateToProps = (state) => ({
    cart:state.menu.cart,
    total:state.menu.total
})

const mapDispatchToProps = (dispatch) => ({
    addToCart: _id => dispatch(addToCart(_id)),
    removeFromCart: _id => dispatch(removeFromCart(_id))
})

export default connect(
    mapStateToProps,mapDispatchToProps
)(Cart)
