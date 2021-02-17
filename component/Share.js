import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

const Share = ({ navigation }) => {
  console.log('-- share --');

  return (
    <View>
      <ScrollView
        contentContainerStyle={{
          marginTop: 20,
          flexGrow: 1,
          alignItems: 'center',
        }}
      >
        <Text>다른글</Text>
      </ScrollView>
    </View>
  );
};

export default Share;
