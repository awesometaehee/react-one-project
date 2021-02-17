import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { LISTDATA } from '../Shared/list';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

const Share = ({ navigation }) => {
  const list = LISTDATA;
  console.log('-- share --');
  console.log(list);

  return (
    <View>
      <ScrollView
        contentContainerStyle={{
          marginTop: 20,
          flexGrow: 1,
          alignItems: 'center',
        }}
      >
        {list.map((item, i) => (
          <TouchableOpacity
            style={styles.container}
            key={i}
            onPress={() => {
              navigation.navigate('Detail', { id: item.id });
            }}
          >
            <Text style={styles.title}>{item.title}</Text>
            <Text>{item.description}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
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

export default Share;
