import React from 'react';
import { StyleSheet, Text, View } from "react-native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

const StackNavigator = () => {

    const Tab = createBottomTabNavigator()
    const Stack = createNativeStackNavigator()

    return (
        <View>
            <Text>

            </Text>
        </View>
    );
};

export default StackNavigator;

const styles = StyleSheet.create({

})