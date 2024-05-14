import { StatusBar } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './source/routes';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#8B4513" barStyle="light-content" />
      <Routes/>
    </NavigationContainer>
  );
}

