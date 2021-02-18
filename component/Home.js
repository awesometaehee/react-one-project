import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import ActionButton from 'react-native-action-button';
import Ionicons from 'react-native-vector-icons/Ionicons';

const home = () => {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <Text>Hi!</Text>
      </ScrollView>
      <ActionButton buttonColor="rgba(231,76,60,1)">
        <ActionButton.Item
          buttonColor="#9b59b6"
          title="New Task"
          onPress={() => console.log('notes tapped!')}
        >
          <Ionicons name="md-create" style={styles.actionButtonIcon} />
        </ActionButton.Item>
        <ActionButton.Item
          buttonColor="#3498db"
          title="Notifications"
          onPress={() => {}}
        >
          <Ionicons
            name="md-notifications-off"
            style={styles.actionButtonIcon}
          />
        </ActionButton.Item>
        <ActionButton.Item
          buttonColor="#1abc9c"
          title="All Tasks"
          onPress={() => {}}
        >
          <Ionicons name="md-done-all" style={styles.actionButtonIcon} />
        </ActionButton.Item>
      </ActionButton>
    </View>
  );
};

const styles = StyleSheet.create({
  float: {
    width: 50,
    height: 50,
    backgroundColor: '#222',
    position: 'absolute',
    bottom: 50,
    right: 50,
  },
});

export default home;
