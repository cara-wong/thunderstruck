import React from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";
import auth from '@react-native-firebase/auth';
import CheckBox from '@react-native-community/checkbox';

import { MainButton } from "../components/button";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export function SignUp(props) {

    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [confirmPassword, setConfirmPassword] = useState(null);
    const [isEighteen, setCheckBox] = useState(false);

    isStrongPassword = () => {
        return ((password.length > 8) && (password.match(/[a-z]/) !== null)
        && (password.match(/[A-Z]/) !== null)
        && (password.match(/.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/) !== null));
    };

    async function hasValidInfo() {
        if (!name || !email || !password || !confirmPassword) {
            alert("Please fill in all fields to create an account");
            return false;
        }

        if (password !== confirmPassword) {
            alert("Your passwords do not match");
            return false;
        }

        if (!this.isStrongPassword()) {
            alert("Your password must be at least 8 characters and contain an uppercase, lowercase, and special characte");
            return false;
        }

        if (!isEighteen) {
            alert("You must be 18 years or older to use Thunderstruck");
            return false;
        }

        await setEmail(email.toLowerCase());
        
        if (email.indexOf("@student.ubc.ca") === -1) {
            alert("Please enter a valid UBC email");
            return false;
        }

        setName(name.trim());
        return true;
    };

    async function createAccount() {
        if (await hasValidInfo()) {
            await auth().createUserWithEmailAndPassword(email, password)
            .then(() => {
              console.log('User', email, 'acreated & signed in!');
              auth().currentUser?.sendEmailVerification().then(() => {
                alert("A verfication email has been sent to " + email + ". After verifying your email, you can login to your account.");
                props.navigation.navigate('Login');
                return auth().signOut();
              }).catch((error) => {
                  alert("An error occured.\nPlease try again later");
              })
            })
            .catch(error => {
                // TODO: clear form if an error occurs
              if (error.code === 'auth/email-already-in-use') {
                alert('That email address is already in use!');
                return;
              }
          
              if (error.code === 'auth/invalid-email') {
                console.log('That email address is invalid!');
                return;
              }

              if (error.code === 'auth/invalid-email') {
                console.log('That email address is invalid!');
                return;
              }
          
              console.error(error);
              alert("Something went wrong, please try again");
            });
        }
    };

    return (
    <View style={styles.container}>
        <View style={styles.headerContainer}>
            <Text style={styles.header}>Sign Up</Text>
        </View>
        <View style={styles.body}>
            <Text style={styles.text}>Name</Text>
            <TextInput style = {styles.input} onChangeText={(text) => setName(text.trim())}></TextInput>


            <Text style={styles.text}>UBC Email</Text>
            <TextInput style = {styles.input} onChangeText={(email) => setEmail(email.trim())}></TextInput>
             <Text style={styles.text} >Password</Text>
             <TextInput style = {styles.input}  secureTextEntry={true} onChangeText={(password) => setPassword(password)}></TextInput>


            <Text style={styles.text}>Confirm Password</Text>
            <TextInput style = {styles.input} secureTextEntry={true} onChangeText={(confirmPassword) => setConfirmPassword(confirmPassword)}></TextInput>

        </View>
        <View style={styles.checkbox}>
                <CheckBox value={isEighteen} onValueChange={setCheckBox} onCheckColor={'#FFCB37'} onTintColor={'#FFCB37'}></CheckBox>
                <Text style={styles.boxText} >Please verify that you are over 18 years of age</Text>

        </View>
        <View style={styles.buttonContainer}>
            <MainButton style={styles.button} title='Submit' onPress={() => createAccount()}/>

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
        width: 300, 
        color: "#FFFFFF",
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
