import React from 'react';
import { View, Text } from 'react-native';

const Detail = ({ route, navigation }) => {
  console.log('-- detail --');
  console.log(route.params);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>Detail</Text>
    </View>
  );
};

export default Detail;
