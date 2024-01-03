import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , AppRegistry } from 'react-native';
import React, { Component } from 'react';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
// export const queryClient = new QueryClient({
//   defaultOptions: {
//     queries: { refetchOnWindowFocus: 'always', retry: false },
//     mutations: {},
//   },
// })
// AppRegistry.registerComponent('pro1', () => App);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
