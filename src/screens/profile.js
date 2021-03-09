import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Video from 'react-native-video';


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
        style={{width:"100%",height:"100%", opacity: .7, }}/>
        <View style={styles.content}>
          <Text style={styles.text}>Hello</Text>
        </View>

        
        

    </View>
    )
}

const styles = StyleSheet.create({
    videoPlayer: {
        position: 'absolute',
        width:"100%",
        
    },
     
    content: {
        flex: 1,
        justifyContent: 'center',
    },
    text: {
        fontSize: 20,
        color: '#FFCB37',
        textAlign: 'center',
        margin: 10,
    },
}); 