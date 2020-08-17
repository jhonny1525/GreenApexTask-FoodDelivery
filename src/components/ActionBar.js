import React from 'react'

import styled from "styled-components/native"

import Icon from 'react-native-vector-icons/Feather';

import { useNavigation } from '@react-navigation/native';

const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  height: 50px;
  padding: 10px;
`

const Title = styled.Text`
  margin-horizontal : 5px;
  color:black;
  font-weight: bold;
  font-size: 20px;
`

const getNavIcon = nav => {
    switch (nav){
        case 'none' :
            return null
        case 'back' :
            return 'arrow-left'
        default:
            return null
    }
}

const ActionBar = ({title,Action,nav}) => {
    const navigation = useNavigation()
    return (
        <Container>
            <Container>
                { getNavIcon(nav) ? <Icon onPress={()=>{navigation.goBack()}} name={getNavIcon(nav)} size={30} color="black"/> : null }
                <Title>{title}</Title>
            </Container>
            {Action ? <Action/> : null}
        </Container>
    )
}

export default ActionBar
