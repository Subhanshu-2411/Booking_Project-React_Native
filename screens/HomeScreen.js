import React, {useLayoutEffect, useState} from 'react';
import {Button, Pressable, ScrollView, StyleSheet, Text, TextInput, View} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {Ionicons, Feather} from "@expo/vector-icons";
import Header from "../components/Header";
import DatePicker from 'react-native-date-ranges';

const HomeScreen = () => {

    const navigation = useNavigation()

    const [selectedDates, setSelectedDates] = useState()

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
                borderBottomColor: "transparent",
                shadowColor: "transparent"
            },
            headerRight: () => (
                <Ionicons
                    name="notifications-outline"
                    size={24}
                    color="white"
                    style={
                        {
                            marginRight: 12,
                        }
                    }
                />
            )
        })
    })

    const customButton = (onConfirm) => {
        return (
            <Button
                onPress={onConfirm}
                style={
                    {
                        container: {
                            width: "80%",
                            marginHorizontal: "3%",
                        },
                        text: {
                            fontSize: 20,
                        }
                    }
                }
                primary
                title="Submit"
            />
        )
    }

    return (
        <View>
            <Header/>
            <ScrollView>
                <View
                    style={
                        {
                            margin:20,
                            borderColor: "#FFC72C",
                            borderWidth: 3,
                            borderRadius: 6,
                        }
                    }
                >
                    <Pressable
                        style={
                            {
                                flexDirection: "row",
                                alignItems: "center",
                                gap: 10,
                                paddingHorizontal: 10,
                                borderColor: "#FFC72C",
                                borderWidth: 2,
                                paddingVertical: 15,
                            }
                        }
                    >
                        <Ionicons
                            name="search"
                            size={25}
                            color="black"
                        />
                        <TextInput
                            placeholder="Enter Your Destination"
                        />
                    </Pressable>
                    <Pressable
                        style={
                            {
                                flexDirection: "row",
                                alignItems: "center",
                                gap: 10,
                                paddingHorizontal: 10,
                                borderColor: "#FFC72C",
                                borderWidth: 2,
                                paddingVertical: 15,
                            }
                        }
                    >
                        <Feather
                            name="calendar"
                            size={25}
                            color="black"
                        />
                        <DatePicker
                            style={
                                {
                                    width: 350,
                                    height: 30,
                                    borderRadius: 0,
                                    borderWidth: 0,
                                    borderColor: "transparent"
                                }
                            }
                            customStyles={
                                {
                                    placeholderText: {
                                        fontSize: 20,
                                        flexDirection: "row",
                                        alignItems: "center",
                                        marginRight: "auto",
                                    },
                                    headerStyle: {
                                        backgroundColor: "blue"
                                    },
                                    contentText: {
                                        fontSize: 20,
                                        flexDirection: "row",
                                        alignItems: "center",
                                        marginRight: "auto",
                                    }
                                }
                            }
                            selectedBgColor: "blue"
                            customButtn={(onConfirm) => customButton(onConfirm)}
                            onConfirm={(startDate, endDate) => setSelectedDates(startDate, endDate)}
                            allowFontScaling={false}
                            placeholder={"Mar 31, 2023 - Apr 5, 2023"}
                            mode={"range"}
                        />
                    </Pressable>
                    <Pressable
                        style={
                            {
                                flexDirection: "row",
                                alignItems: "center",
                                gap: 10,
                                paddingHorizontal: 10,
                                borderColor: "#FFC72C",
                                borderWidth: 2,
                                paddingVertical: 15,
                            }
                        }
                    >
                        <Ionicons
                            name="person-outline"
                            size={25}
                            color="black"
                        />
                        <TextInput
                            placeholder="1 room • 2 adults • 0 children"
                        />
                    </Pressable>
                    <Pressable>

                    </Pressable>
                </View>
            </ScrollView>
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({

})