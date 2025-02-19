
//npm install react-native-gesture-handler
//npm install @react-navigation/stack

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Screen1 from "./screen1";
import Screen2 from "./screen2";

const Stack = createStackNavigator();

function lab6bai1() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Screen1">
                <Stack.Screen name="Screen1" component={Screen1} />
                <Stack.Screen name="Screen2" component={Screen2} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default lab6bai1;
