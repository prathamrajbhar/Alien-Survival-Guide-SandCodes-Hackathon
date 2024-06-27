// screens/HomeScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomButton from '../components/CustomButton';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Alien Survival Guide</Text>
            <CustomButton style={styles.homeButton} title="Tips" onPress={() => navigation.navigate('TipList')} />
            <CustomButton style={styles.homeButton} title="Alerts" onPress={() => navigation.navigate('Alert')} />
            <CustomButton style={styles.homeButton} title="Tools" onPress={() => navigation.navigate('Tools')} />
            <CustomButton style={styles.homeButton} title="Profile" onPress={() => navigation.navigate('Profile')} />
            <CustomButton style={styles.homeButton} title="Settings" onPress={() => navigation.navigate('Settings')} />
            <CustomButton style={styles.homeButton} title="Training" onPress={() => navigation.navigate('TrainingHome')} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        position: 'absolute',
        top: 100,
    },
    homeButton: {
        marginBottom: 16,
        width: '100%',
        height: 50,
    },
});

export default HomeScreen;
