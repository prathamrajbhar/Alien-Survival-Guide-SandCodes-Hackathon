import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './navigation/AuthNavigator';
import MainNavigator from './navigation/MainNavigator';
import { createStackNavigator } from '@react-navigation/stack';
import { auth } from './firebaseConfig';
import { SafeAreaView, AppRegistry, View, StyleSheet } from 'react-native';

const Stack = createStackNavigator();

const App = () => {
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });
    return unsubscribe;
  }, []);

  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {user ? (
            <Stack.Screen
              name="Main"
              component={MainNavigator} />
          ) : (
            <Stack.Screen
              name="Auth"
              component={AuthNavigator}
            />
          )}
        </Stack.Navigator>
      </View>
    </NavigationContainer>
  );
}

AppRegistry.registerComponent('main', () => App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
});

export default App;
