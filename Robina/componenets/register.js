import React from "react";

import styles from "./style";
import { Alert, ImageBackground, Keyboard, KeyboardAvoidingView, Text, TextInput, TouchableWithoutFeedback, View } from "react-native";
import { Button } from "react-native-elements";

const homeimage = require('../images/greenimage1.jpg')

export default function RegisterScreen({ navigation }) {
  const onRegisterPress = () =>
    Alert.alert(
      "Resistration",
      "Your request is being processed",
      [
        {
          text: "Ok",
          onPress: () => navigation.navigate('Main'),
          style: "cancel",
        },
      ],
      {
        cancelable: true,
        onDismiss: () =>
          Alert.alert(
            "Returning to registration screen"
          ),
      }
    );

  return (
    <KeyboardAvoidingView style={styles.containerView} behavior="padding">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.registerScreenContainer}>
          <ImageBackground source={homeimage} style={styles.image}>
            <View style={styles.registerFormView}>
              <Text style={styles.logoText}>TAFE QLD Register</Text>
              <TextInput placeholder="Firstname" placeholderColor="#c4c3cb" style={styles.registerFormTextInput} />
              <TextInput placeholder="Lastname" placeholderColor="#c4c3cb" style={styles.registerFormTextInput} />
              <TextInput placeholder="Email" placeholderColor="#c4c3cb" style={styles.registerFormTextInput} />
              <TextInput placeholder="Phone" placeholderColor="#c4c3cb" style={styles.registerFormTextInput} />
              <TextInput placeholder="Username" placeholderColor="#c4c3cb" style={styles.registerFormTextInput} />
              <TextInput placeholder="Password" placeholderColor="#c4c3cb" style={styles.registerFormTextInput} secureTextEntry={true} />
              <Button buttonStyle={styles.registerButton} onPress={() => onRegisterPress()} title="Register" />
            </View>
          </ImageBackground>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}