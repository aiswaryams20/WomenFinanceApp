import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>SmartSheFi Dashboard</Text>

      <View style={styles.cardRow}>
        <TouchableOpacity
          style={[styles.card, { backgroundColor: '#4CAF50' }]}
          onPress={() => navigation.navigate('Budgeting')}
        >
          <FontAwesome name="pie-chart" size={40} color="#FFF" />
          <Text style={styles.cardText}>Budgeting</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.card, { backgroundColor: '#E53935' }]}
          onPress={() => navigation.navigate('Expense Tracker')}
        >
          <FontAwesome name="money" size={40} color="#FFF" />
          <Text style={styles.cardText}>Expenses</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardRow}>
        <TouchableOpacity
          style={[styles.card, { backgroundColor: '#3F51B5' }]}
          onPress={() => navigation.navigate('Calculators')}
        >
          <FontAwesome name="calculator" size={40} color="#FFF" />
          <Text style={styles.cardText}>Calculators</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.card, { backgroundColor: '#FF9800' }]}
          onPress={() => navigation.navigate('Learning')}
        >
          <FontAwesome name="book" size={40} color="#FFF" />
          <Text style={styles.cardText}>Learning</Text>
        </TouchableOpacity>
      </View>

      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  cardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  card: {
    flex: 1,
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  cardText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
});

export default HomeScreen;
