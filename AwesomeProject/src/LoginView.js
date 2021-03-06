/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text

} from 'react-native';

import FBSDK, {
    LoginButton,
    AccessToken
  } from 'react-native-fbsdk'
import { Actions } from 'react-native-router-flux';
import firebase, {
   firebaseAuth
} from './firebase'

const { FacebookAuthProvider } = firebase.auth


export default class LoginView extends Component {
  
  state = {
    credential: null
  }

  componentWillMount() {
    this.authenticateUser();
  }

  authenticateUser = () => {
    AccessToken.getCurrentAccessToken().then((data) => {
      const { accessToken } = data
      const credential = FacebookAuthProvider.credential(accessToken)
      firebaseAuth.signInWithCredential(credential).then((credentials) => {
        this.setState({ credentials })
        Actions.home()
      }, (error) => {
        console.log("Sign in error", error)
      })
    })
  }
  
  handleLoginFinish = (error, result) => {
    if (error) {
      console.error(error)
      //alert("login has error: " + result.error);
    } else if (result.isCancelled) {
      alert("login is cancelled.");
    } else {
      this.authenticateUser()
      //Actions.home()
    }
  }
  
  render() {

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
            Bienvenidos a PlayMusic
        </Text>
        <LoginButton
          readPermissions={['public_profile', 'email' ]}
          onLoginFinished={this.handleLoginFinish}
          onLogoutFinished={() => alert("logout.")}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    justifyContent: 'center',
    alignItems: 'center'
  },
  welcome: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 20
  }
});
