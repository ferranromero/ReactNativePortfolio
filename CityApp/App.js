/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

export default function App(props) {
  const styles = StyleSheet.create({
    root: {
      flex: 1,
    },
  });
  return (
    <View style={styles.root}>
      <Text>React App</Text>
    </View>
  );
}
