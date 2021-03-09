import React from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";

import CheckBox from '@react-native-community/checkbox';

import { MainButton } from "../components/button";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



export function SignUp(props) {
    return (
    <View style={styles.container}>
        <Text style={styles.font}>Placeholder</Text>
        <View style={styles.header}>
            <Text style={styles.header}>Sign Up</Text>
        </View>
        <View style={styles.body}>
            <Text style={styles.body}>Name</Text>
            <TextInput style = {styles.input}></TextInput>


            <Text style={styles.body}>UBC Email</Text>
            <TextInput style = {styles.input}></TextInput>
             <Text style={styles.body}>Password</Text>
             <TextInput style = {styles.input}></TextInput>


            <Text style={styles.body}>Re-Type Password</Text>
            <TextInput style = {styles.input}></TextInput>

            <CheckBox onCheckColor={'#FFCB37'} onTintColor={'#FFCB37'} style={styles.checkbox}></CheckBox>
            <Text style={styles.boxText} >Please verify that you are over 18 years of age</Text>

        </View>
        <View style={styles.button}>
            <MainButton style={styles.button} title='Submit' onPress={() => props.navigation.navigate('CreateProfile')}/>

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
        marginLeft: 30,
        padding: 4,
        marginTop: 20,
        fontSize: 20,
        color: '#FFFFFF'
    },

    container: {
        marginTop: 50,
        height: '100%',
        backgroundColor: '#312B77',
    },
 
    button: {
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        height: 30, 
        borderColor: 'rgba(158, 150, 150, 0)', 
        borderWidth: 3, 
        borderBottomColor: '#FFCB37', 
        width: 300, 
        marginLeft: 30,
    },
    checkbox: {
        marginTop: 60,
        marginLeft: 25
    },
    boxText: {
        fontSize:15,
        color: '#FFFFFF',
        marginLeft: 70,
        marginTop: -30,

    }
}); 