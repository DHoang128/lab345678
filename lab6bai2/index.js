//npm install @react-navigation/drawer

import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Screen1 from "./screen1";
import Screen2 from "./screen2";

const Drawer = createDrawerNavigator();

const lab6bai2 = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Screen1">
                <Drawer.Screen name="Screen1" component={Screen1} />
                <Drawer.Screen name="Screen2" component={Screen2} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
};

export default lab6bai2;