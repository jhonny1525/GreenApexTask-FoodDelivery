import React from 'react'
import { Dimensions,Text,StyleSheet,TouchableOpacity } from "react-native"
import styled from 'styled-components/native'

import Ionicons from 'react-native-vector-icons/Ionicons'

const Container = styled.View`
  width: ${props => props.width};
  background-color: white;
  border-radius: 10px;
  padding: 5px;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  margin-top: 2px;
`

const ActionsContainer = styled.View`
  width: 100%;
  padding: 2px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
`

const { width } = Dimensions.get('window')

class MenuItem extends React.Component{

    render() {
        const { quantity,onAddItem,onRemoveItem,name,description,price } = this.props

        return (
            <Container width={Math.round(width*0.40)} >
                <Ionicons name={'fast-food'} size={80} color={'#7dd49e'} />
                <Text style={styles.title} >{name}{'\n₹'}{price}</Text>
                <Text style={styles.desc} >{description}</Text>
                <ActionsContainer>
                    {quantity > 0 ?
                        <>
                            <Ionicons
                                onPress={(id)=>{
                                    onRemoveItem(id)
                                }}
                                name={"remove"}
                                size={30}
                                color={'red'}
                            />
                            <Text>{quantity}</Text>
                            <Ionicons
                                onPress={(id)=>{
                                    onAddItem(id)
                                }}
                                name={"add"}
                                size={30}
                                color={'green'}
                            />
                        </> :
                            <TouchableOpacity onPress={(id)=>{
                                onAddItem(id)
                            }} style={styles.addButton} >
                                <Text style={styles.addLabel} >
                                    Add
                                </Text>
                                <Ionicons
                                    name={"add"}
                                    size={30}
                                    color={'green'}
                                />
                            </TouchableOpacity>
                    }
                </ActionsContainer>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    title:{
        fontWeight:'bold',
        fontSize: 18,
        textAlign:'center'
    },
    desc:{
      textAlign:'center'
    },
    addLabel: {
        color:'green',
        fontSize:16
    },
    addButton: {
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
        borderWidth:1,
        borderColor:'green',
        margin:3
    }
})

export default MenuItem
