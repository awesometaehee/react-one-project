import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Button } from 'react-native-elements';
import { LISTDATA } from '../Shared/list';

import { useDispatch, useSelector } from 'react-redux';
import { addTask, removeTask } from '../redux/actions/tasks';

const Detail = ({ route }) => {
  console.log('-- detail --');
  console.log(route.params);

  const id = route.params.id;
  const item = LISTDATA.filter((item) => item.id == id)[0];
  console.log(item);

  const tasks = useSelector((state) => state.tasks);
  console.log('-- tasks --');
  console.log(tasks);

  const isExistedTask =
    tasks.filter((item) => item.id == id).length > 0 ? true : false;

  const dispatch = useDispatch();

  return (
    <ScrollView
      contentContainerStyle={{
        marginTop: 20,
        flexGrow: 1,
        alignItems: 'center',
      }}
    >
      <View style={styles.container}>
        <View style={{ marginBottom: 20 }}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.desc}>{item.description}</Text>
        </View>
        {isExistedTask ? (
          <Button
            title="삭제"
            buttonStyle={{
              borderRadius: 0,
              backgroundColor: 'gray',
            }}
            onPress={() => {
              dispatch(removeTask(id));
            }}
          />
        ) : (
          <Button
            title="담기"
            buttonStyle={{
              borderRadius: 0,
              backgroundColor: '#ed8936',
            }}
            onPress={() => {
              dispatch(addTask(item));
            }}
          ></Button>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '90%',
    flex: 1,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 18,
    color: '#222',
    marginBottom: 30,
  },
  desc: {
    fontSize: 16,
    color: '#222',
  },
});

export default Detail;
