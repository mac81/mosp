/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default class mosp extends Component {
  render() {
    return (
      <LinearGradient
        colors={['#e74c3c', '#c0392b']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={styles.wrapper}>
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to the ministry of silly polls!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#fff',
    backgroundColor: 'transparent'
  },
  instructions: {
    textAlign: 'center',
    color: '#fff',
    marginBottom: 5,
    backgroundColor: 'transparent'
  },
});

AppRegistry.registerComponent('mosp', () => mosp);
