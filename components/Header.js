import React from 'react';
import {Pressable, StyleSheet, Text, View} from "react-native";
import {Ionicons, FontAwesome5} from "@expo/vector-icons";

const Header = () => {
    return (
        <View
            style={
                {
                    backgroundColor: "blue",
                    height: 65,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-around",
                }
            }
        >
            <Pressable
                style={
                    {
                        flexDirection: "row",
                        alignItems: "center",
                        borderColor: "white",
                        borderWidth: 1,
                        borderRadius: 25,
                        padding: 10,
                    }
                }
            >
                <Ionicons
                    name="bed-outline"
                    size={25}
                    color="white"
                />
                <Text
                    style={
                        {
                            marginLeft: 10,
                            fontWeight: "bold",
                            fontSize: 15,
                        }
                    }
                >
                    Stays
                </Text>
            </Pressable>

            <Pressable
                style={
                    {
                        flexDirection: "row",
                        alignItems: "center",
                        borderColor: "white",
                    }
                }
            >
                <Ionicons
                    name="airplane-outline"
                    size={25}
                    color="white"
                />
                <Text
                    style={
                        {
                            marginLeft: 10,
                            fontWeight: "bold",
                            fontSize: 15,
                        }
                    }
                >
                    Flights
                </Text>
            </Pressable>

            <Pressable
                style={
                    {
                        flexDirection: "row",
                        alignItems: "center",
                        borderColor: "white",
                    }
                }
            >
                <Ionicons
                    name="car-outline"
                    size={25}
                    color="white"
                />
                <Text
                    style={
                        {
                            marginLeft: 10,
                            fontWeight: "bold",
                            fontSize: 15,
                        }
                    }
                >
                    Car Rentals
                </Text>
            </Pressable>
            <Pressable
                style={
                    {
                        flexDirection: "row",
                        alignItems: "center",
                        borderColor: "white",
                    }
                }
            >
                <FontAwesome5
                    name="taxi"
                    size={25}
                    color="white"
                />
                <Text
                    style={
                        {
                            marginLeft: 10,
                            fontWeight: "bold",
                            fontSize: 15,
                        }
                    }
                >
                    Taxis
                </Text>
            </Pressable>
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({

})