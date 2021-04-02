import React from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";
import { MainButton } from "../components/button";


export function CreateProfile2(props) {
    return (
    <View style={styles.container}>
       <View style={styles.headerContainer}>
            <Text style={styles.header}>Create Your Profile</Text>
        </View>
        <View style={styles.body}>
            <TextInput style = {styles.input} placeholder="Your favorite UBC prof" placeholderTextColor="#FFFFFF"/>


            <TextInput style = {styles.input}></TextInput>
             <Text style={styles.text, styles.cnf} >Your UBC Confession</Text>
             <TextInput style = {styles.input,styles.textBox} multiline={true} numberOfLines={5} ></TextInput>


            
        </View>
       
        <View style={styles.buttonContainer}>
            <MainButton style={styles.button} title='Next' onPress={() => props.navigation.navigate('UploadPhotos')}/>

        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    header: {
        
        fontSize: 30,
        
        color: '#FFFFFF',
        marginBottom: "10%"
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
        color: "#FFFFFF",
        width: 300, 
        marginTop: "10%"

    },

    textBox: {
        height: "40%",
        borderWidth: 2,
        borderColor: "#FFCB37",
        marginTop: "2%",
        marginBottom: "-30%"

    },
    text: {
        fontSize: 20,
        color: '#FFFFFF',

    },
    cnf: {
        fontSize: 20,
        color: '#FFFFFF',
        padding: "5%",
        textAlign: "center",
        marginTop: "5%"
       

    },
    button: {

    }
}); 