import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { mainColors } from "../constants/colours/appColors"
import { MainButton } from "../components/button";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export function Start(props) {
    return (
    <View>
        <View style={styles.topBlock}>
            <Image style={styles.logo} source={require('../assets/images/logo-placeholder.png')}/>
        </View>
        <View style={styles.bottomBlock}>
            <View>
                <MainButton title='Login' onPress={() => props.navigation.navigate('Login')}/>
                <MainButton title='Sign Up' onPress={() => {props.navigation.navigate('SignUp')}}/>
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