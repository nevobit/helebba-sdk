/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  useColorScheme,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import Login from './src/screens/Authentication/Login';

function App(): React.JSX.Element {

  return (
    <SafeAreaView>

      <Login />
    </SafeAreaView>
  );
}


export default App;
