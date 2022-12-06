import React from 'react';
import {SafeAreaView} from 'react-native';
import {Provider as ReduxProvider} from 'react-redux';
import UserList from './components/UserList';
import store from './store/store';

const App = () => {
  return (
    <SafeAreaView>
      <ReduxProvider store={store}>
        <UserList />
      </ReduxProvider>
    </SafeAreaView>
  );
};

export default App;
