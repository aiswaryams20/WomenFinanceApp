import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/screens/HomeScreen';
import BudgetingScreen from './src/screens/BudgetingScreen';
import ExpenseTrackerScreen from './src/screens/ExpenseTrackerScreen';
import CalculatorsScreen from './src/screens/CalculatorsScreen';
import LearningScreen from './src/screens/LearningScreen';
import { BudgetProvider } from './src/context/BudgetContext'; // Import BudgetProvider

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <BudgetProvider>
      <NavigationContainer>
        <Tab.Navigator initialRouteName="Home">
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Budgeting" component={BudgetingScreen} />
          <Tab.Screen name="Expense Tracker" component={ExpenseTrackerScreen} />
          <Tab.Screen name="Calculators" component={CalculatorsScreen} />
          <Tab.Screen name="Learning" component={LearningScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </BudgetProvider>
  );
}