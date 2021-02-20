import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { mainColors } from "../constants/colours/appColors"

export function Start(props) {
    return (
    <View>
        <View style={styles.topBlock}></View>
        <View style={styles.bottomBlock}></View>
    </View>
    )
}

const styles = StyleSheet.create({
    topBlock: {
        backgroundColor: mainColors[2],
        height: '50%',
    },
    bottomBlock: {
        backgroundColor: mainColors[1],
        height: '50%',
    }
});