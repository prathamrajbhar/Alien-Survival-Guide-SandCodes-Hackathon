import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import TipListScreen from '../screens/Tip/TipListScreen';
import TipDetailScreen from '../screens/Tip/TipDetailScreen';
import AlertScreen from '../screens/AlertScreen';
import ToolsScreen from '../screens/Tools/ToolsScreen';
import ToolDetailScreen from '../screens/Tools/ToolDetailScreen';
import ProfileScreen from '../screens/Profile/ProfileScreen';
import EditProfileScreen from '../screens/Profile/EditProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';
import TrainingHomeScreen from '../screens/Training/TrainingHomeScreen';
import TrainingSimulationScreen from '../screens/Training/TrainingSimulationScreen';

const Stack = createStackNavigator();

const MainNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="TipList" component={TipListScreen} options={{ headerShown: true, title: 'Tips' }} />
    <Stack.Screen name="TipDetail" component={TipDetailScreen} options={{ headerShown: true, title: 'Tip Detail' }} />
    <Stack.Screen name="Alert" component={AlertScreen} options={{ headerShown: true, title: 'Alerts' }} />
    <Stack.Screen name="Tools" component={ToolsScreen} options={{ headerShown: true, title: 'Tools' }} />
    <Stack.Screen name="ToolDetail" component={ToolDetailScreen} options={{ headerShown: true, title: 'Tool Detail' }} />
    <Stack.Screen name="Profile" component={ProfileScreen} options={{ headerShown: true, title: 'Profile' }} />
    <Stack.Screen name="EditProfile" component={EditProfileScreen} options={{ headerShown: true, title: 'Edit Profile' }} />
    <Stack.Screen name="Settings" component={SettingsScreen} options={{ headerShown: true, title: 'Settings' }} />
    <Stack.Screen name="TrainingHome" component={TrainingHomeScreen} options={{ headerShown: true, title: 'Training' }} />
    <Stack.Screen name="TrainingSimulation" component={TrainingSimulationScreen} options={{ headerShown: true, title: 'Training Simulation' }} />
  </Stack.Navigator>
);

export default MainNavigator;
