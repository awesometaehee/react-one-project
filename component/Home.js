import React, { useState, useCallback } from 'react';
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const home = ({ navigation }) => {
  const data = [
    {
      title: '1111',
      desc:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    },
    {
      title: '2222',
      desc:
        'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
    },
    {
      title: '33333',
      desc:
        'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages',
    },
  ];

  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        contentContainerStyle={{
          marginTop: 20,
          flexGrow: 1,
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}
      >
        {data.map((item, index) => (
          <TouchableOpacity style={styles.container} key={index}>
            <Text numberOfLines={1} style={styles.title}>
              {item.title}
            </Text>
            <Text numberOfLines={6} style={styles.desc}>
              {item.desc}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <TouchableOpacity
        style={styles.float}
        onPress={() => {
          console.log('HIHIHIHI');
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
    width: Dimensions.get('window').width / 2 - 15,
    height: Dimensions.get('window').width / 2 - 15,
    padding: 10,
    marginBottom: 10,
    marginLeft: 10,
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
