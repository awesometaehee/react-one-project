import React from 'react';
import { LogBox } from 'react-native';
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

LogBox.ignoreLogs(['Animated: `useNativeDriver` was not specified.']);

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
        options={{ title: 'home' }}
      />
      <HomeStack.Screen
        name="Write"
        component={Write}
        options={{ title: '글작성' }}
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
        options={{ title: '모두이야기' }}
      />
      <ListStack.Screen
        name="Detail"
        component={Detail}
        options={{ title: '상세보기' }}
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
        options={{ title: '담아두기' }}
      />
      <TaskStack.Screen
        name="Detail"
        component={Detail}
        options={{ title: '상세보기' }}
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
      case '모두이야기':
        iconName = focused ? 'document-text' : 'document-text-outline';
        break;
      case '담아두기':
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
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={screenOptions}
            tabBarOptions={tabBarOptions}
          >
            <Tab.Screen name="home" component={HomeStackScreen} />
            <Tab.Screen name="모두이야기" component={ListStackScreen} />
            <Tab.Screen name="담아두기" component={TaskStackScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
}
