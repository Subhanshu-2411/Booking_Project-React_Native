import React from 'react';
import { StyleSheet, Text, View } from "react-native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import { AntDesign, Entypo } from '@expo/vector-icons';

const StackNavigator = () => {

    const Tab = createBottomTabNavigator()
    const Stack = createNativeStackNavigator()

    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={
                    {
                        tabBarLabel: "Home",
                        headerShown: false,
                        tabBarIcon: (
                            {focused}
                        ) => focused
                            ? (
                                <Entypo name="home" size={24} color="blue"/>
                            )
                            : (
                                <AntDesign name="home" size={24} color="blue"/>
                            )
                    }
                }
            />
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={
                    {
                        tabBarLabel: "Home",
                        headerShown: false,
                        tabBarIcon: (
                            {focused}
                        ) => focused
                            ? (
                                <Entypo name="home" size={24} color="blue"/>
                            )
                            : (
                                <AntDesign name="home" size={24} color="blue"/>
                            )
                    }
                }
            />
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={
                    {
                        tabBarLabel: "Home",
                        headerShown: false,
                        tabBarIcon: (
                            {focused}
                        ) => focused
                            ? (
                                <Entypo name="home" size={24} color="blue"/>
                            )
                            : (
                                <AntDesign name="home" size={24} color="blue"/>
                            )
                    }
                }
            />
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={
                    {
                        tabBarLabel: "Home",
                        headerShown: false,
                        tabBarIcon: (
                            {focused}
                        ) => focused
                            ? (
                                <Entypo name="home" size={24} color="blue"/>
                            )
                            : (
                                <AntDesign name="home" size={24} color="blue"/>
                            )
                    }
                }
            />
        </Tab.Navigator>
    );
};

export default StackNavigator;

const styles = StyleSheet.create({

})