import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { useSelector, useDispatch } from 'react-redux';
import { removeTask } from '../redux/actions/tasks';
import { IconButton, Colors } from 'react-native-paper';

const Task = ({ navigation }) => {
  const tasks = useSelector((state) => state.tasks);
  console.log('-- tasks redux state --');
  console.log(tasks);

  const dispatch = useDispatch();

  return (
    <ScrollView
      contentContainerStyle={{
        marginTop: 20,
        flexGrow: 1,
        alignItems: 'center',
      }}
    >
      {tasks.map((item, i) => (
        <TouchableOpacity
          style={styles.container}
          key={i}
          onPress={() => {
            navigation.navigate('Detail', { id: item.id });
          }}
        >
          <Text numberOfLines={1} style={styles.title}>
            {item.title}
          </Text>
          <Text numberOfLines={3}>{item.description}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '90%',
    padding: 20,
    marginBottom: 10,
    backgroundColor: '#fff',
    shadowColor: '#222',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#222',
  },
});

export default Task;
