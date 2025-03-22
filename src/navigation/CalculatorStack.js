// src/navigation/CalculatorStack.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CalculatorsScreen from '../screens/CalculatorsScreen';
import SIPCalculator from '../screens/SIPCalculator';

const Stack = createStackNavigator();

const CalculatorStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="CalculatorHome"   // Changed from "Calculators"
        component={CalculatorsScreen} 
        options={{ headerShown: false }}
      />
      <Stack.Screen 
        name="SIPCalculator"   // Removed space for consistency
        component={SIPCalculator} 
        options={{ title: 'SIP Calculator' }}
      />
    </Stack.Navigator>
  );
};

export default CalculatorStack;
