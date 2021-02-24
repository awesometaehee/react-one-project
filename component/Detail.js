import React, { useEffect, useCallback, useState } from 'react';
import { View, Text, StyleSheet, ProgressBarAndroid } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Button } from 'react-native-elements';
// import { LISTDATA } from '../Shared/list';
import api from '../api/list';

import { useDispatch, useSelector } from 'react-redux';
import { addTask, removeTask } from '../redux/actions/tasks';

const Detail = ({ route }) => {
  console.log('-- detail --');
  console.log(route.params);

  const id = route.params.id;
  // const item = LISTDATA.filter((item) => item.id == id)[0];

  const [item, setItem] = useState(null);

  const dispatch = useDispatch();

  const tasks = useSelector((state) => state.tasks);
  console.log('-- tasks --');
  console.log(tasks);

  const isExistedTask =
    tasks.filter((item) => item.id == id).length > 0 ? true : false;

  const getDetail = useCallback(async () => {
    const result = await api.get(id);
    console.log(result.data);
    setTimeout(() => {
      setItem(result.data);
    }, 300);
  }, []);

  useEffect(() => {
    getDetail();
  }, []);

  return (
    <ScrollView
      contentContainerStyle={{
        marginTop: 20,
        flexGrow: 1,
        alignItems: 'center',
      }}
    >
      {!item && <ProgressBarAndroid />}
      {item && (
        <View style={styles.container}>
          <View style={{ marginBottom: 20 }}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.desc}>{item.description}</Text>
          </View>
          {isExistedTask ? (
            <Button
              title="Delete"
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
              title="Add"
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
      )}
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
