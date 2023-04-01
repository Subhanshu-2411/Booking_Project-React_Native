import React, {useLayoutEffect} from 'react';
import { StyleSheet, Text, View } from "react-native";
import {useNavigation} from "@react-navigation/native";
import {Ionicons} from "@expo/vector-icons";

const HomeScreen = () => {

    const navigation = useNavigation()

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: true,
            title: "Booking.com",
            headerTitleStyle: {
                fontSize: 20,
                fontWeight: "bold",
                color: "white"
            },
            headerStyle: {
                backgroundColor: "blue",
                height: 110,
            },
            headerRight: () => (
                <Ionicons
                    name="notifications-outline"
                    size={24}
                    color="white"
                />
            )
        })
    })

    return (
        <View>
            <Text>HomeScreen</Text>
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({

})