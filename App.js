import React from 'react';
import AppNavigator from './app/AppNavigator';

import { NavigationContainer } from '@react-navigation/native';

import { Provider } from 'react-redux';
import { store } from './app/redux/store';

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </Provider>

  )
}

export default App
