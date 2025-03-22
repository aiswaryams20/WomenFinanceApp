import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SIPCalculator from './SIPCalculator';
import EMICalculator from './EMICalculator';

const Stack = createNativeStackNavigator();

const CalculatorsMain = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Financial Calculators</Text>
      
      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate('SIP Calculator')}
      >
        <Text style={styles.title}>SIP Calculator</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate('EMI Calculator')}
      >
        <Text style={styles.title}>EMI Calculator</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const CalculatorsScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Calculators Home" 
        component={CalculatorsMain} 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="SIP Calculator" 
        component={SIPCalculator} 
        options={{ title: 'SIP Calculator' }} 
      />
      <Stack.Screen 
        name="EMI Calculator" 
        component={EMICalculator} 
        options={{ title: 'EMI Calculator' }} 
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#444',
  },
});

export default CalculatorsScreen;
