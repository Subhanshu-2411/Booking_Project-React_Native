import React, {useLayoutEffect, useState} from 'react';
import {Button, Pressable, ScrollView, StyleSheet, Text, TextInput, View} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {Ionicons, Feather} from "@expo/vector-icons";
import Header from "../components/Header";
import DatePicker from 'react-native-date-ranges';
import {SlideAnimation, BottomModal, ModalButton, ModalContent, ModalFooter, ModalTitle} from "react-native-modals";

const HomeScreen = () => {

    const navigation = useNavigation()

    const [selectedDates, setSelectedDates] = useState()

    const [rooms, setRooms] = useState(1)

    const [adults, setAdults] = useState(2)

    const [children, setChildren] = useState(0)

    const [modalVisible, setModalVisible] = useState(false)

    useLayoutEffect(
        () => {
            navigation.setOptions(
                {
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
                }
            )
        }
    )

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
        <>
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
                            placeholderTextColor="black"
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
                        onPress={
                            () => setModalVisible(!modalVisible)
                        }
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
                            placeholderTextColor="red"
                            placeholder="1 rooms • 2 adults • 0 children"
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
                                backgroundColor: "blue"
                            }
                        }
                    >
                        <Text
                            style={
                                {
                                    textAlign: "center",
                                    fontSize: 15,
                                    fontWeight: "500",
                                    color: "white",
                                }
                            }
                        >
                            Search
                        </Text>
                    </Pressable>
                </View>
            </ScrollView>
        </View>
            <BottomModal
                swipeThreshold={200}
                onBachdropPress={
                    () => setModalVisible(!modalVisible)
                }
                swipeDirection={['up', 'down']}
                footer={
                    <ModalFooter>
                        <ModalButton
                            text="Apply"
                            style={
                                {
                                    marginBottom: 20,
                                    color: "white",
                                    backgroundColor: "blue"
                                }
                            }
                            onPress={() => setModalVisible(!modalVisible)}
                        />
                    </ModalFooter>
                }
                modalTitle={
                    <ModalTitle
                        title="Select Rooms & Guests"
                    />
                }
                modalAnimation={
                    new SlideAnimation(
                        {
                            slideFrom: "bottom"
                        }
                    )
                }
                onHardwareBackPress={
                    () => setModalVisible(!modalVisible)
                }
                visible={modalVisible}
                onTouchOutside={
                    () => setModalVisible(!modalVisible)
                }
            >
                <ModalContent
                    style={
                        {
                            width: "100%",
                            height: 310,
                        }
                    }
                >
                    <View
                        style={
                            {
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",
                                marginVertical: 15,
                            }
                        }
                    >
                        <Text>
                            Rooms
                        </Text>
                        <Pressable
                            style={
                                {
                                    flexDirection: "row",
                                    alignItems: "center",
                                    gap: 10,
                                }
                            }
                        >
                            <Pressable
                                style={
                                    {
                                        width: 26,
                                        height: 26,
                                        borderRadius: 13,
                                        borderColor: "#BEBEBE",
                                        backgroundColor: "#E0E0E0"
                                    }
                                }
                            >
                                <Text
                                    style={
                                        {
                                            textAlign: "center",
                                            fontSize: 20,
                                            fontWeight: "600",
                                            paddingHorizontal: 6,

                                        }
                                    }
                                >
                                    -
                                </Text>
                            </Pressable>
                            <Pressable>
                                <Text>
                                    {rooms}
                                </Text>
                            </Pressable>
                            <Pressable
                                style={
                                    {
                                        width: 26,
                                        height: 26,
                                        borderRadius: 13,
                                        borderColor: "#BEBEBE",
                                        backgroundColor: "#E0E0E0"
                                    }
                                }
                            >
                                <Text
                                    style={
                                        {
                                            textAlign: "center",
                                            fontSize: 20,
                                            fontWeight: "600",
                                            paddingHorizontal: 6,

                                        }
                                    }
                                >
                                    +
                                </Text>
                            </Pressable>
                        </Pressable>

                    </View>
                </ModalContent>
            </BottomModal>
        </>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({

})