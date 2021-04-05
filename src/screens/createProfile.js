import React from "react";
import { View, StyleSheet, Text, TextInput, Image, KeyboardAvoidingView } from "react-native";
import { MainButton } from "../components/button";
import {useState} from "react";
import {Picker} from '@react-native-picker/picker';
import ModalDropdown from 'react-native-modal-dropdown';





export function CreateProfile(props) {
    const [selectedLanguage, setSelectedLanguage] = useState();


    return (

    <View style={styles.container}>
        <View style={styles.headerContainer}>
            <Text style={styles.header}>Create Your Profile</Text>
        </View>
        <View style={styles.body}>
            <KeyboardAvoidingView>
            <Text style={styles.text}>Name</Text>
            <TextInput style = {styles.input}
            keyboardAppearance={"dark"}></TextInput>


            <Text style={styles.text}>Age</Text>
            <TextInput 
            style = {styles.input}
            keyboardType={"numeric"}
            keyboardAppearance={"dark"}></TextInput>
             <Text style={styles.text} >Year</Text>
             <TextInput style = {styles.input}
             keyboardType={"numeric"}
             keyboardAppearance={"dark"} ></TextInput>


            <Text style={styles.text}>Faculty </Text>
            {/* <Picker
                selectedValue={selectedLanguage}
                onValueChange={(itemValue, itemIndex) =>
                setSelectedLanguage(itemValue)
                }>
                <Picker.Item label="First" value="java" />
                <Picker.Item label="Second" value="js" />
            </Picker> */}
            <ModalDropdown 
            textStyle={styles.mdText}
            dropdownStyle={styles.dropdown}
            dropdownTextHighlightStyle={styles.highlightDD}
            isFullWidth={true}
            defaultValue={"Choose Faculty"}
            dropdownTextStyle={styles.ddText}

            options={['Arts', 'Science', 'Sauder']}  />
            </KeyboardAvoidingView>
        </View>
       
        <View style={styles.buttonContainer}>
            <MainButton style={styles.button} title='Next' onPress={() => props.navigation.navigate('CreateProfile2')}/>

        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    header: {
        
        fontSize: 30,
        
        color: '#FFFFFF'
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
    },
    text: {
        fontSize: 20,
        color: '#FFFFFF',
        marginTop: "10%"
    },
    dropdown: {
        backgroundColor: '#FFCB37'

        
    },
    mdText: {
        fontSize: 20,
        color: '#FFFFFF'

    },
    ddText:{
       backgroundColor: '#FFCB37',
       fontSize: 15
    },
    highlightDD:{
        backgroundColor: "#FFFFFF"
    }
}); 
