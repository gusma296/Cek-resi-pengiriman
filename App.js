import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Dashboard, Welcome, DetailResi} from './app/screen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {persistReducer, persistStore} from 'redux-persist';
import {applyMiddleware, createStore} from 'redux';
import {Provider, useSelector} from 'react-redux';
import {PersistGate} from 'redux-persist/es/integration/react';
import rootReducers from './app/reducers';
import AsyncStorage from '@react-native-community/async-storage';
import {createLogger} from 'redux-logger';

const presistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['user', 'history'],
};

const presistReducers = persistReducer(presistConfig, rootReducers);

const store = createStore(presistReducers);

const presistedStore = persistStore(store);

const Stack = createStackNavigator();

const Container = () => {
  const user = useSelector((state) => state.user);
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={'none'}>
        {user.welcome ? (
          <Stack.Screen name="Welcome" component={Welcome} />
        ) : (
          <>
            <Stack.Screen name="Dashboard" component={Dashboard} />
            <Stack.Screen name="DetailResi" component={DetailResi} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const App = () => {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <PersistGate persistor={presistedStore} loading={null}>
          <Container />
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;
