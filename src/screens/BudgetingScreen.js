import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Alert,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const BudgetingScreen = () => {
  const [budgetCategory, setBudgetCategory] = useState('');
  const [budgetAmount, setBudgetAmount] = useState('');
  const [budgets, setBudgets] = useState([]);

  // Function to handle adding a budget category and amount
  const handleAddBudget = () => {
    if (!budgetCategory || !budgetAmount) {
      Alert.alert('Error', 'Please fill in all required fields.');
      return;
    }

    if (isNaN(budgetAmount) || parseFloat(budgetAmount) <= 0) {
      Alert.alert('Invalid Amount', 'Please enter a valid amount.');
      return;
    }

    const newBudget = {
      id: Date.now().toString(),
      category: budgetCategory,
      amount: parseFloat(budgetAmount).toFixed(2),
    };

    setBudgets([...budgets, newBudget]);

    // Clear input fields
    setBudgetCategory('');
    setBudgetAmount('');
  };

  // Function to render each budget item in the FlatList
  const renderBudgetItem = ({ item }) => (
    <View style={styles.budgetItem}>
      <Text style={styles.budgetCategory}>{item.category}</Text>
      <Text style={styles.budgetAmount}>₹ {item.amount}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Budgeting</Text>

      <TextInput
        style={styles.input}
        placeholder="Category (e.g., Food, Rent)"
        value={budgetCategory}
        onChangeText={setBudgetCategory}
      />
      <TextInput
        style={styles.input}
        placeholder="Amount (₹)"
        keyboardType="numeric"
        value={budgetAmount}
        onChangeText={setBudgetAmount}
      />

      <TouchableOpacity style={styles.addButton} onPress={handleAddBudget}>
        <FontAwesome name="plus-circle" size={30} color="white" />
        <Text style={styles.addButtonText}>Add Budget</Text>
      </TouchableOpacity>

      <FlatList
        data={budgets}
        keyExtractor={(item) => item.id}
        renderItem={renderBudgetItem}
        style={styles.budgetList}
        ListEmptyComponent={
          <Text style={styles.noBudgets}>No budgets added yet.</Text>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#DDD',
    paddingVertical: 8,
    marginBottom: 15,
    fontSize: 16,
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2196F3',
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  addButtonText: {
    color: 'white',
    fontSize: 18,
    marginLeft: 10,
  },
  budgetList: {
    marginTop: 20,
  },
  budgetItem: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  budgetCategory: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  budgetAmount: {
    fontSize: 16,
    color: '#444',
    marginTop: 5,
  },
  noBudgets: {
    textAlign: 'center',
    color: '#888',
    marginTop: 20,
    fontSize: 16,
  },
});

export default BudgetingScreen;
