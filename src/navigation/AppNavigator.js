import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import BudgetingScreen from '../screens/BudgetingScreen';
import ExpenseTrackerScreen from '../screens/ExpenseTrackerScreen';
import CalculatorsScreen from '../screens/CalculatorsScreen';
import LearningScreen from '../screens/LearningScreen';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Budgeting" component={BudgetingScreen} />
        <Tab.Screen name="Expense Tracker" component={ExpenseTrackerScreen} />
        <Tab.Screen name="Calculators" component={CalculatorsScreen} />
        <Tab.Screen name="Learning" component={LearningScreen} />
       
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
