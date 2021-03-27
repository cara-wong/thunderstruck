import React from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";
import Video from 'react-native-video';
import { MainButton } from "../components/button";

import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';



export function Profile(props) {
    const sintel = require('./Vancouver.mp4');
    return (
    
    <View style={styles.container}>

        <Video
        source={sintel}
        resizeMode="cover"
        repeat={true}
        paused={false}
        volume={0}
        style={{width:"100%",height:"100%", opacity: .7 }}/>
    
        <Card style={styles.Card}>
            <Card.Actions>
                <Button style={styles.button1} onPress={() => props.navigation.navigate('CreateProfile')}>Log In</Button>
                <Button style={styles.button2}>Ok</Button>
            </Card.Actions>
            <Card.Title title="Log In" />
            <Card.Content>
                <View style={styles.body}>
             <Text style={styles.body}>Email</Text>
             <TextInput style = {styles.input}></TextInput>


            <Text style={styles.body}>Password</Text>
            <TextInput style = {styles.input}></TextInput>

        </View>
        <View style={styles.button}>
            <MainButton style={styles.button} title='Submit' onPress={() => props.navigation.navigate('Profile')}/>

        </View>
            </Card.Content>
           
        </Card> 
        
        

    </View>
    )
}

const styles = StyleSheet.create({
    videoPlayer: {
        position: 'absolute',
        width:"100%",
        
    },
    Card: {
        marginTop: "50%",
        marginLeft: "5%",
        marginRight: "5%",
        alignItems: "center",
        width: "90%",
        height: "60%",
        position: "absolute",
        backgroundColor: "rgba(245, 245, 245, 1)",
        opacity: .6,
        borderColor: 'rgba(158, 150, 150, 0)'

    },
    button1: {
        paddingRight: "50%"
    },
    button: {
        marginTop: "30%"
    }


   
}); 