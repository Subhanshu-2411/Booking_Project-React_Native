import React from 'react';
import { StyleSheet, Text, View } from "react-native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import { AntDesign, Entypo, Ionicons } from '@expo/vector-icons';
import SavedScreen from "./screens/SavedScreen";
import BookingScreen from "./screens/BookingScreen";
import ProfileScreen from "./screens/ProfileScreen";
import {NavigationContainer} from "@react-navigation/native";

const StackNavigator = () => {

    const Tab = createBottomTabNavigator()
    const Stack = createNativeStackNavigator()

    function BottomTabs() {
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
                                    <Ionicons name="home" size={24} color="blue"/>
                                )
                                : (
                                    <Ionicons name="home-outline" size={24} color="blue"/>
                                )
                        }
                    }
                />
                <Tab.Screen
                    name="Saved"
                    component={SavedScreen}
                    options={
                        {
                            tabBarLabel: "Saved",
                            headerShown: false,
                            tabBarIcon: (
                                {focused}
                            ) => focused
                                ? (
                                    <Ionicons name="heart" size={24} color="blue"/>
                                )
                                : (
                                    <Ionicons name="heart-outline" size={24} color="blue"/>
                                )
                        }
                    }
                />
                <Tab.Screen
                    name="Bookings"
                    component={BookingScreen}
                    options={
                        {
                            tabBarLabel: "Bookings",
                            headerShown: false,
                            tabBarIcon: (
                                {focused}
                            ) => focused
                                ? (
                                    <Ionicons name="notifications" size={24} color="blue"/>
                                )
                                : (
                                    <Ionicons name="notifications-outline" size={24} color="blue"/>
                                )
                        }
                    }
                />
                <Tab.Screen
                    name="Profile"
                    component={ProfileScreen}
                    options={
                        {
                            tabBarLabel: "Profile",
                            headerShown: false,
                            tabBarIcon: (
                                {focused}
                            ) => focused
                                ? (
                                    <Ionicons name="person" size={24} color="blue"/>
                                )
                                : (
                                    <Ionicons name="person-outline" size={24} color="blue"/>
                                )
                        }
                    }
                />
            </Tab.Navigator>
        )
    }

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Main" component={BottomTabs}/>"
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default StackNavigator;

const styles = StyleSheet.create({

})