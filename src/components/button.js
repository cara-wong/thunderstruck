import React from "react";
import { Button, View, StyleSheet } from "react-native";
import { mainColors } from "../constants/colours/appColors";

export function MainButton(props) {
    return (
        <View style={styles.button}>
            <Button title={props.title} color='black'></Button>
        </View>
    )
}

// TODO: dynamic width and height 
const styles = StyleSheet.create({
    button: {
        backgroundColor: 'white',
        height: 50,
        width: 216,
        borderRadius: 30,
        justifyContent: 'center',
        marginVertical: 10,
    },
});