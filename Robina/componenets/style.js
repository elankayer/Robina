const React = require("react-native");

const { StyleSheet } = React;

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    alignItems: "center"
  },
  loginScreenContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  registerScreenContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  logoText: {
    color: "white",
    fontSize: 40,
    fontWeight: "800",
    marginTop: 150,
    marginBottom: 30,
    backgroundColor: "#FF0000",
  },
  loginFormView: {
    flex: 1,
  },
  registerFormView: {
    flex: 1,
  },
  loginFormTextInput: {
    height: 43,
    fontSize: 14,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#eaeaea",
    backgroundColor: "#fafafa",
    paddingLeft: 10,
    marginTop: 5,
    marginBottom: 5,
  },
  registerFormTextInput: {
    height: 43,
    fontSize: 14,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#eaeaea",
    backgroundColor: "#fafafa",
    paddingLeft: 10,
    marginTop: 5,
    marginBottom: 5,
  },
  loginButton: {
    backgroundColor: "#3897f1",
    borderRadius: 5,
    height: 45,
    marginTop: 10,
    width: 350,
  },
  registerButton: {
    backgroundColor: "#3897f1",
    borderRadius: 5,
    height: 45,
    marginTop: 10,
    width: 370,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: "center"
  },
});
export default styles;