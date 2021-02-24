import React, { useState, useCallback } from 'react';
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import DeleteButton from './DeleteButton';
import Write from './Write';

const home = ({ navigation }) => {
  const [item, setItem] = useState({});

  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        contentContainerStyle={{
          marginTop: 20,
          flexGrow: 1,
          alignItems: 'center',
        }}
      >
        <TouchableOpacity style={styles.container}>
          <Text numberOfLines={1} style={styles.title}>
            HIHIHI
          </Text>
          <Text numberOfLines={3} style={styles.desc}>
            HIHIHIHIHIH
          </Text>
        </TouchableOpacity>
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
