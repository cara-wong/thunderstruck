import React from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";

import CheckBox from '@react-native-community/checkbox';

import { MainButton } from "../components/button";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useState } from "react";
import firebase from "@react-native-firebase/app";



export function SignUp(props) {
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const[password, setPassword] = useState(null);
    const[confirm_password, setCPassword] = useState(null);
    const registerUser = () => {
        if(name && email && password && confirm_password)
            if(password == confirm_password){
                firebase
                .auth()
                .createUserWithEmailandPassword(email,password)
                .then((user) => {
                    alert(JSON.stringify(user)) ;
                })
                .catch((err) => {
                    alert(err);
                });

            }else alert("Passwords Don't Match");
            else alert("Please fill the form in correctly");
            
    }
    return (
    <View style={styles.container}>
        <Text style={styles.font}></Text>
        <View style={styles.header}>
            <Text style={styles.header}>Sign Up</Text>
        </View>
        <View style={styles.body}>
            <Text style={styles.body}>Name</Text>
            <TextInput style = {styles.input}
            onChangeText={(text) => setName(text)}></TextInput>


            <Text style={styles.body}>UBC Email</Text>
            <TextInput style = {styles.input}
             onChangeText={(text) => setEmail(text)} ></TextInput>
             <Text style={styles.body}>Password</Text>
             <TextInput style = {styles.input}
             onChangeText={(text) => setPassword(text)}></TextInput>


            <Text style={styles.body}>Re-Type Password</Text>
            <TextInput style = {styles.input}
            onChangeText={(text) => setCPassword(text)}></TextInput>

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
        padding: 4,
        marginTop: 20,
        fontSize: 20,
        color: '#FFFFFF',
        alignItems: 'center'
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
        marginTop: 50,
        marginLeft: -200
 },
    boxText: {
        fontSize:15,
        color: '#FFFFFF',
        marginTop: -30,
        
      }
}); 