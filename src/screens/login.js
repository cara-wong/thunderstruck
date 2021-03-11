import React from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";
import { MainButton } from "../components/button";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export function Login(props) {
    return (
        <View style={styles.container}>
        <Text style={styles.font}></Text>
        <View style={styles.header}>
            <Text style={styles.header}>Login</Text>
        </View>
        <View style={styles.body}>
             <Text style={styles.body}>Email</Text>
             <TextInput style = {styles.input}></TextInput>


            <Text style={styles.body}>Password</Text>
            <TextInput style = {styles.input}></TextInput>

        </View>
        <View style={styles.button}>
            <MainButton style={styles.button} title='Submit' onPress={() => props.navigation.navigate('Profile')}/>

        </View>


    </View>
    )
}

const styles = StyleSheet.create({
    header: {
        marginTop: 90,
        fontSize: 30,
        justifyContent: 'center',
        alignItems: 'center',
        color: '#FFFFFF'
    },
    body: {
        padding: 5,
        marginTop: 30,
        fontSize: 20,
        color: '#FFFFFF',
        alignItems: "center"
    },

    container: {
        marginTop: 50,
        height: '100%',
        backgroundColor: '#312B77',
    },

    button: {
        padding: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        height: 30, 
        borderColor: 'rgba(158, 150, 150, 0)', 
        borderWidth: 3, 
        borderBottomColor: '#FFCB37', 
        width: 300, 
        marginLeft: 30
    }
});