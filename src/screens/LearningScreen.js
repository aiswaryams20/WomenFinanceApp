import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const learningTopics = [
  {
    id: '1',
    title: 'Budgeting Basics',
    content: 'Learn how to create a budget and stick to it effectively.',
  },
  {
    id: '2',
    title: 'Savings Strategies',
    content: 'Discover smart ways to save money every month.',
  },
  {
    id: '3',
    title: 'Investing 101',
    content: 'Introduction to stocks, bonds, and mutual funds.',
  },
  {
    id: '4',
    title: 'Debt Management',
    content: 'Tips to manage and pay off debts efficiently.',
  },
  {
    id: '5',
    title: 'Retirement Planning',
    content: 'Plan early for a secure and comfortable retirement.',
  },
];

const LearningScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Financial Education</Text>
      {learningTopics.map((topic) => (
        <View key={topic.id} style={styles.card}>
          <Text style={styles.title}>{topic.title}</Text>
          <Text style={styles.content}>{topic.content}</Text>
        </View>
      ))}
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
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#444',
    marginBottom: 10,
  },
  content: {
    fontSize: 14,
    color: '#777',
  },
});

export default LearningScreen;
