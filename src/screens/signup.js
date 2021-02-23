import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { mainColors } from "../constants/colours/appColors"
import { MainButton } from "../components/button";

export function SignUp(props) {
    return (
    <View style={styles.container}>
        <Text style={styles.font}>Placeholder</Text>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 50
    },
    font: {
        fontSize: 30,
    }
});