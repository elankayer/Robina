import { ImageBackground, StyleSheet, Button, View, Text } from 'react-native';

const homeimage = require('../images/greenimage1.jpg')

export default function MainScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ImageBackground source={homeimage} style={styles.image}>
        <Text style={styles.text}>{'TAFE Queensland'}</Text>
        <Text>{'\n'}</Text>
        <Button
          title="Sign In"
          onPress={() => navigation.navigate('Login')}
        />
        <Text>{'\n'}</Text>
        <Button
          title="register"
          onPress={() => navigation.navigate('Register')}
        />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#FF0000"
  }
});