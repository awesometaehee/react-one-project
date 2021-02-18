import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const home = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <Text>Hi!</Text>
      </ScrollView>
      <TouchableOpacity
        style={styles.float}
        onPress={() => {
          navigation.navigate('Write');
        }}
      >
        <ImageBackground
          source={require('../assets/images/pen.png')}
          style={styles.image}
        ></ImageBackground>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  float: {
    width: 50,
    height: 50,
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 20,
    right: 20,
    borderRadius: 25,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  image: {
    width: 25,
    height: 25,
  },
});

export default home;
