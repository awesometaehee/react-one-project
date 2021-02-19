import React from 'react';
import { Button } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Ionicons from 'react-native-vector-icons/Ionicons';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './redux/reducers';

import Home from './component/Home';
import List from './component/List';
import Write from './component/Write';
import Task from './component/Task';
import Detail from './component/Detail';

const store = createStore(rootReducer);

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const ListStack = createStackNavigator();
const TaskStack = createStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Home',
        }}
      />
      <HomeStack.Screen
        name="Write"
        component={Write}
        options={{
          title: 'Your Story',
        }}
      />
    </HomeStack.Navigator>
  );
};

const ListStackScreen = () => {
  return (
    <ListStack.Navigator>
      <ListStack.Screen
        name="List"
        component={List}
        options={{ title: 'Story' }}
      />
      <ListStack.Screen
        name="Detail"
        component={Detail}
        options={{ title: 'Details' }}
      />
    </ListStack.Navigator>
  );
};

const TaskStackScreen = () => {
  return (
    <TaskStack.Navigator>
      <TaskStack.Screen
        name="Task"
        component={Task}
        options={{ title: 'Add' }}
      />
      <TaskStack.Screen
        name="Detail"
        component={Detail}
        options={{ title: 'Details' }}
      />
    </TaskStack.Navigator>
  );
};

const screenOptions = ({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
    let iconName;

    switch (route.name) {
      case 'home':
        iconName = focused ? 'home' : 'home-outline';
        break;
      case 'story':
        iconName = focused ? 'document-text' : 'document-text-outline';
        break;
      case 'add':
        iconName = focused ? 'file-tray-full' : 'file-tray-full-outline';
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
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={screenOptions}
            tabBarOptions={tabBarOptions}
          >
            <Tab.Screen name="home" component={HomeStackScreen} />
            <Tab.Screen name="story" component={ListStackScreen} />
            <Tab.Screen name="add" component={TaskStackScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
}
