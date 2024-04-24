import { useState } from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import AppNavigator from './config/Navigate';
import Navbar from './Components/Navbar';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt: {
    fontSize: 39,
    color: "black"
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10
  },
});

function App() {

  return (
      <>
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
    </>
  );
}

export default App;