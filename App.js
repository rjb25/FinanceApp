import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Alert, Button } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Brandon is a little girl</Text>

      <Button 
title="Click Me" 
	onPress={() => Alert.alert("Who is little girl", "So is Zach", [{text:"yes"},{text:"YES"}])}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
