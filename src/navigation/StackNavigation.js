import {StyleSheet} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from '../screens/Splash';
import ChatListingScreen from '../screens/ChatListingScreen';
import ChatDetail from '../screens/ChatDetail';

const StackNavigation = () => {
  const stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <stack.Screen name="Splash" component={Splash} />
        <stack.Screen name="ChatListingScreen" component={ChatListingScreen} />
        <stack.Screen name="ChatDetail" component={ChatDetail} />
        
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;

const styles = StyleSheet.create({});
