import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { mainColors } from "../constants/colours/appColors"
import { MainButton } from "../components/button";

export function Start(props) {
    return (
    <View>
        <View style={styles.topBlock}>
            <Image style={styles.logo} source={require('../assets/images/logo-placeholder.png')}/>
        </View>
        <View style={styles.bottomBlock}>
            <View>
                <MainButton title='Login'/>
                <MainButton title='Sign Up'/>
            </View>
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    topBlock: {
        backgroundColor: mainColors[2],
        height: '50%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottomBlock: {
        backgroundColor: mainColors[1],
        height: '50%',
        justifyContent: 'center',
        alignItems: 'center',
    },
});