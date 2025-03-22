import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const SIPCalculator = () => {
  const [monthlyInvestment, setMonthlyInvestment] = useState('');
  const [annualReturn, setAnnualReturn] = useState('');
  const [duration, setDuration] = useState('');
  const [maturityAmount, setMaturityAmount] = useState(0);

  const calculateSIP = () => {
    const P = parseFloat(monthlyInvestment);
    const r = parseFloat(annualReturn) / 100 / 12; // Monthly rate of return
    const t = parseFloat(duration); // Duration in years

    // Input validation
    if (isNaN(P) || isNaN(r) || isNaN(t) || P <= 0 || t <= 0) {
      setMaturityAmount('Invalid Input');
      return;
    }

    // Handle edge case where annual return is 0%
    if (r === 0) {
      const M = P * 12 * t; // If no interest, simply multiply monthly investment by total months
      setMaturityAmount(Number(M.toFixed(2)).toLocaleString('en-IN'));
      return;
    }

    // Calculate maturity amount using the correct SIP formula (end-of-month contributions)
    const M = P * (((Math.pow(1 + r, 12 * t)) - 1) / r);
    setMaturityAmount(Number(M.toFixed(2)).toLocaleString('en-IN'));
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>SIP Calculator</Text>
      <Text style={styles.label}>Monthly Investment (₹):</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Enter monthly investment"
        value={monthlyInvestment}
        onChangeText={setMonthlyInvestment}
      />
      <Text style={styles.label}>Expected Annual Return (%):</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Enter annual return"
        value={annualReturn}
        onChangeText={setAnnualReturn}
      />
      <Text style={styles.label}>Investment Duration (Years):</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Enter duration in years"
        value={duration}
        onChangeText={setDuration}
      />
      <TouchableOpacity style={styles.button} onPress={calculateSIP}>
        <Text style={styles.buttonText}>Calculate</Text>
      </TouchableOpacity>
      <View style={styles.resultContainer}>
        <Text style={styles.resultLabel}>Maturity Amount:</Text>
        <Text style={styles.resultValue}>₹ {maturityAmount}</Text>
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
    backgroundColor: '#4CAF50',
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
    color: '#4CAF50',
    marginTop: 10,
  },
});

export default SIPCalculator;