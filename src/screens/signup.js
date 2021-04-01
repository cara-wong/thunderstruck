import React from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";

import CheckBox from '@react-native-community/checkbox';

import { MainButton } from "../components/button";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



export function SignUp(props) {
    return (
    <View style={styles.container}>
        <View style={styles.headerContainer}>
            <Text style={styles.header}>Sign Up</Text>
        </View>
        <View style={styles.body}>
            <Text style={styles.text}>Name</Text>
            <TextInput style = {styles.input}></TextInput>


            <Text style={styles.text}>UBC Email</Text>
            <TextInput style = {styles.input}></TextInput>
             <Text style={styles.text} >Password</Text>
             <TextInput style = {styles.input}  secureTextEntry={true}></TextInput>


            <Text style={styles.text}>Confirm Password</Text>
            <TextInput style = {styles.input} secureTextEntry={true}></TextInput>

        </View>
        <View style={styles.checkbox}>
                <CheckBox onCheckColor={'#FFCB37'} onTintColor={'#FFCB37'}></CheckBox>
                <Text style={styles.boxText} >Please verify that you are over 18 years of age</Text>

        </View>
        <View style={styles.buttonContainer}>
            <MainButton style={styles.button} title='Submit' onPress={() => props.navigation.navigate('CreateProfile')}/>

        </View>


    </View>
    )
}

const styles = StyleSheet.create({
    header: {
        
        fontSize: 30,
        
        color: '#FFFFFF'
    },
    body: {
     
       
       
    },

    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        height: '100%',
        backgroundColor: '#312B77',
    },
 
  
    input: {

        height: 30, 
        borderColor: 'rgba(158, 150, 150, 0)', 
        borderWidth: 3, 
        borderBottomColor: '#FFCB37', 
        width: 300, 
    },
    text: {
        fontSize: 20,
        color: '#FFFFFF',
        marginTop: "10%"
    },
    checkbox: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: "8%"
        
    },
    boxText: {
        fontSize:16,
        color: '#FFFFFF',
        padding: "2%"
        
   

    },
  
}); 