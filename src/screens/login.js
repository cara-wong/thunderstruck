import React from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";
import { MainButton } from "../components/button";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export function Login(props) {
    return (
        <View style={styles.container}>
        <View style={styles.headerContainer}>
            <Text style={styles.header}>Login</Text>
        </View>
        <View style={styles.bodyContainer}>
             <Text style={styles.text}>Email</Text>
             <TextInput style = {styles.input}></TextInput>


            <Text style={styles.text}>Password</Text>
            <TextInput style = {styles.input}></TextInput>

        </View>
        <View style={styles.buttonContainer}>
            <MainButton style={styles.button} title='Submit' onPress={() => props.navigation.navigate('Profile')}/>

        </View>


    </View>
    )
}

const styles = StyleSheet.create({
    header: {
        fontSize: 30,
        padding: 50,
        
        color: '#FFFFFF'
    },
    text: {
        fontSize: 20,
        color: '#FFFFFF',

    },

    container: {
       flex: 1,
       justifyContent: "center",
       alignItems: "center",
       height: '100%',
       backgroundColor: '#312B77',
    },

    button: {
        marginBottom: -300
    },
    input: {
        height: 30, 
        borderColor: 'rgba(158, 150, 150, 0)', 
        borderWidth: 3, 
        borderBottomColor: '#FFCB37', 
        width: 300, 
        padding: 20,
        marginBottom: "10%"
    }
});