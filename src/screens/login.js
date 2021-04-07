import React, { useState } from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";
import { MainButton } from "../components/button";
import auth from '@react-native-firebase/auth';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



export function Login(props) {

    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    async function login() {
        if (!email || !password) {
            alert("Please type your email and password to login.");
            return;
        }
        await setEmail(email.trim());
        // TODO: check if the account has been verified
        await auth().signInWithEmailAndPassword(email, password).then( (res) => {
            if (auth().currentUser?.emailVerified) {
                console.log(res.user.email, 'was signed in successfully');
                props.navigation.navigate('CreateProfile');
            } else {
                // TODO: clear form
                alert("Please verify your email before using Thunderstruck.");
                return auth().signOut();
            }
        })
        .catch((err) => {
            // TODO: clear form
            if (err.code === "auth/user-not-found") {
                alert("This user does not exist.");
            } else {
                alert("Your email or password was incorrect"); 
            }
        });
    }

    return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.header}>Login</Text>
        </View>
        <View style={styles.body}>
             <Text style={styles.body}>Email</Text>
             <TextInput style={styles.input} onChangeText={(email) => setEmail(email.toLowerCase().trim())}></TextInput>


            <Text style={styles.body}>Password</Text>
            <TextInput style={styles.input} onChangeText={(password) => setPassword(password)}></TextInput>

        </View>
        <View style={styles.button}>
            <MainButton style={styles.button} title='Submit' onPress={() => login()}/>

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
        padding: 5,
        marginTop: 30,
        fontSize: 20,
        color: '#FFFFFF'
    },

    container: {
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
        marginLeft: 30,
    }
});