import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Ionicons from 'react-native-vector-icons/Ionicons';

import List from './component/List';
import Write from './component/Write';
import Share from './component/Share';
import Detail from './component/Detail';

const Tab = createBottomTabNavigator();
const ListStack = createStackNavigator();
const ShareStack = createStackNavigator();

const ListStackScreen = () => {
  return (
    <ListStack.Navigator>
      <ListStack.Screen
        name="List"
        component={List}
        options={{ title: '모아보기' }}
      />
      <ListStack.Screen
        name="Detail"
        component={Detail}
        options={{ title: '상세보기' }}
      />
    </ListStack.Navigator>
  );
};

const ShareStackScreen = () => {
  return (
    <ShareStack.Navigator>
      <ShareStack.Screen
        name="Share"
        component={Share}
        options={{ title: '다른이야기' }}
      />
      <ShareStack.Screen
        name="Detail"
        component={Detail}
        options={{ title: '상세보기' }}
      />
    </ShareStack.Navigator>
  );
};

const screenOptions = ({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
    let iconName;

    switch (route.name) {
      case '모아보기':
        iconName = focused ? 'document-text' : 'document-text-outline';
        break;
      case '다른이야기':
        iconName = focused ? 'people' : 'people-outline';
        break;
    }

    return <Ionicons name={iconName} size={size} color={color} />;
  },
});

const tabBarOptions = {
  activeTintColor: '#222',
  inactiveTintColor: 'gray',
};

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={screenOptions}
          tabBarOptions={tabBarOptions}
        >
          <Tab.Screen name="모아보기" component={ListStackScreen} />
          <Tab.Screen name="다른이야기" component={ShareStackScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
