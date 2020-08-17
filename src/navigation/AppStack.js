import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Menu from "../screens/Menu"
import Cart from "../screens/Cart"

const Stack = createStackNavigator();


const AppStack = () => {
    return (
        <Stack.Navigator headerMode={'none'} initialRouteName="Menu" >
            <Stack.Screen  name="Menu" component={Menu} />
            <Stack.Screen  name="Cart" component={Cart} />
        </Stack.Navigator>
    )
}
export default AppStack
