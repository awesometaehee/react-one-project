import React from 'react';
import { View, Text, Button } from 'react-native';

import Detail from './Detail';

const List = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>List</Text>
      <Button
        title="Go to Detail"
        onPress={() => {
          navigation.navigate('Detail', { id: 1 });
        }}
      />
    </View>
  );
};

export default List;
