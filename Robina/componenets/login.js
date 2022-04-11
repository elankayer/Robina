import React from "react";

import styles from "./style";
import { Alert, ImageBackground, Keyboard, KeyboardAvoidingView, Text, TextInput, TouchableWithoutFeedback, View } from "react-native";
import { Button } from "react-native-elements";

const homeimage = require('../images/greenimage1.jpg')

export default function LoginScreen({ navigation }) {
  const onLoginPress = () =>
    Alert.alert(
      "Successful Login",
      "Let's explore ...",
      [
        {
          text: "Ok",
          onPress: () => navigation.navigate('Explore'),
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
        <View style={styles.loginScreenContainer}>
          <ImageBackground source={homeimage} style={styles.image}>
            <View style={styles.loginFormView}>
              <Text style={styles.logoText}>TAFE QLD Sign In</Text>
              <TextInput placeholder="Username" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} />
              <TextInput placeholder="Password" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} secureTextEntry={true} />
              <Button buttonStyle={styles.loginButton} onPress={() => onLoginPress()} title="Sign In" />
            </View>
          </ImageBackground>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}