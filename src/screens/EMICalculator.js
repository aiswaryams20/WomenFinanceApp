import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const EMICalculator = () => {
  const [loanAmount, setLoanAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [loanTenure, setLoanTenure] = useState('');
  const [emiAmount, setEmiAmount] = useState(0);

  const calculateEMI = () => {
    const P = parseFloat(loanAmount);
    const R = parseFloat(interestRate) / 100 / 12;
    const N = parseFloat(loanTenure) * 12;

    // EMI Calculation Formula
    const EMI = P * R * (Math.pow(1 + R, N) / (Math.pow(1 + R, N) - 1));
    setEmiAmount(EMI.toFixed(2));
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>EMI Calculator</Text>

      <Text style={styles.label}>Loan Amount (₹):</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Enter loan amount"
        value={loanAmount}
        onChangeText={setLoanAmount}
      />

      <Text style={styles.label}>Annual Interest Rate (%):</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Enter interest rate"
        value={interestRate}
        onChangeText={setInterestRate}
      />

      <Text style={styles.label}>Loan Tenure (Years):</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Enter tenure in years"
        value={loanTenure}
        onChangeText={setLoanTenure}
      />

      <TouchableOpacity style={styles.button} onPress={calculateEMI}>
        <Text style={styles.buttonText}>Calculate EMI</Text>
      </TouchableOpacity>

      <View style={styles.resultContainer}>
        <Text style={styles.resultLabel}>Monthly EMI:</Text>
        <Text style={styles.resultValue}>₹ {emiAmount}</Text>
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
    textAlign: 'center',
    marginBottom: 30,
  },
  label: {
    fontSize: 18,
    color: '#555',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
    borderColor: '#DDD',
    borderWidth: 1,
  },
  button: {
    backgroundColor: '#FF5722',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  resultContainer: {
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    marginTop: 20,
  },
  resultLabel: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#444',
  },
  resultValue: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FF5722',
    marginTop: 10,
  },
});

export default EMICalculator;
