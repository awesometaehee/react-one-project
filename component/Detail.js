import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { LISTDATA } from '../Shared/list';

import { useDispatch, useSelector } from 'react-redux';
import { addTask, removeTask } from '../redux/actions/tasks';

const Detail = ({ route }) => {
  console.log('-- detail --');
  console.log(route.params);

  const id = route.params.id;
  const item = LISTDATA.filter((item) => item.id == id)[0];
  console.log(item);

  return (
    <ScrollView
      contentContainerStyle={{
        marginTop: 20,
        flexGrow: 1,
        alignItems: 'center',
      }}
    >
      <View style={styles.container}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.desc}>{item.description}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '90%',
  },
  title: {
    fontSize: 25,
    color: '#222',
    marginBottom: 30,
  },
  desc: {
    fontSize: 18,
    color: '#222',
  },
});

export default Detail;
