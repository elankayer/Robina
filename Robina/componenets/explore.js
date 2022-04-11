import React from "react";

import styles from "./style";
import { ImageBackground, Keyboard, KeyboardAvoidingView, Text, TouchableWithoutFeedback, View } from "react-native";

const homeimage = require('../images/greenimage1.jpg')

export default function ExploreScreen() {
  
  return (
    <KeyboardAvoidingView style={styles.containerView} behavior="padding">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.loginScreenContainer}>
          <ImageBackground source={homeimage} style={styles.image}>
            <View style={styles.loginFormView}>
              <Text style={styles.logoText}>Explore</Text>
              <Text>Explore 1</Text>
              <Text>Explore 2</Text>
            </View>
          </ImageBackground>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}