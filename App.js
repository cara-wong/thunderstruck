import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Start } from './src/screens/start';
import { SignUp } from './src/screens/signup';
import { Login } from './src/screens/login';
import { CreateProfile } from "./src/screens/createProfile";
import { Profile } from "./src/screens/profile";
import { CreateProfile2 } from "./src/screens/createProfile2";
import { UploadPhotos } from "./src/screens/uploadPhotos";


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen
          name="Start"
          component={ Start }
          options={{ title: "Start" }}
        />
        <Stack.Screen
          name="SignUp"
          component={ SignUp }
          options={{ title: "SignUp" }}
        />
         <Stack.Screen
          name="Login"
          component={ Login }
          options={{ title: "Login" }}
        />
        <Stack.Screen
          name="Profile"
          component={ Profile }
          options={{ title: "Profile" }}
        />
        <Stack.Screen
          name="CreateProfile"
          component={ CreateProfile }
          options={{ title: "CreateProfile" }}
        />
        <Stack.Screen
          name="CreateProfile2"
          component={ CreateProfile2 }
          options={{ title: "CreateProfile2" }}
        />
         <Stack.Screen
          name="UploadPhotos"
          component={ UploadPhotos }
          options={{ title: "UploadPhotos" }}
        />
      </Stack.Navigator>
      
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
