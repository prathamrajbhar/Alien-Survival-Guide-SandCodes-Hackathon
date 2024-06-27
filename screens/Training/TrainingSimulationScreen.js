import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TrainingSimulationScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Training Simulation</Text>
            <Text>Simulation content goes here...</Text>
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
        marginBottom: 24,
    },
});

export default TrainingSimulationScreen;
