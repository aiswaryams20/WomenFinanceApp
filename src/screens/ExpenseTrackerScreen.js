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

const ExpenseTrackerScreen = () => {
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [note, setNote] = useState('');
  const [expenses, setExpenses] = useState([]);

  // Function to handle adding an expense
  const handleAddExpense = () => {
    if (!amount || !category) {
      Alert.alert('Error', 'Please fill in all required fields.');
      return;
    }

    if (isNaN(amount) || parseFloat(amount) <= 0) {
      Alert.alert('Invalid Amount', 'Please enter a valid amount.');
      return;
    }

    const newExpense = {
      id: Date.now().toString(),
      amount: parseFloat(amount).toFixed(2),
      category,
      note,
    };

    setExpenses([...expenses, newExpense]);

    // Clear input fields
    setAmount('');
    setCategory('');
    setNote('');
  };

  // Function to render each expense item in the FlatList
  const renderExpenseItem = ({ item }) => (
    <View style={styles.expenseItem}>
      <Text style={styles.expenseCategory}>{item.category}</Text>
      <Text style={styles.expenseAmount}>₹ {item.amount}</Text>
      {item.note ? <Text style={styles.expenseNote}>Note: {item.note}</Text> : null}
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Expense Tracker</Text>

      <TextInput
        style={styles.input}
        placeholder="Amount (₹)"
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
      />
      <TextInput
        style={styles.input}
        placeholder="Category (e.g., Food, Transport)"
        value={category}
        onChangeText={setCategory}
      />
      <TextInput
        style={styles.input}
        placeholder="Note (optional)"
        value={note}
        onChangeText={setNote}
      />

      <TouchableOpacity style={styles.addButton} onPress={handleAddExpense}>
        <FontAwesome name="plus-circle" size={30} color="white" />
        <Text style={styles.addButtonText}>Add Expense</Text>
      </TouchableOpacity>

      <FlatList
        data={expenses}
        keyExtractor={(item) => item.id}
        renderItem={renderExpenseItem}
        style={styles.expenseList}
        ListEmptyComponent={<Text style={styles.noExpenses}>No expenses added yet.</Text>}
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
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  addButtonText: {
    color: 'white',
    fontSize: 18,
    marginLeft: 10,
  },
  expenseList: {
    marginTop: 20,
  },
  expenseItem: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  expenseCategory: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  expenseAmount: {
    fontSize: 16,
    color: '#444',
    marginTop: 5,
  },
  expenseNote: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
    fontStyle: 'italic',
  },
  noExpenses: {
    textAlign: 'center',
    color: '#888',
    marginTop: 20,
    fontSize: 16,
  },
});

export default ExpenseTrackerScreen;
