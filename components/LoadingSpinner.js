// components/LoadingSpinner.js
import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

const LoadingSpinner = () => {
    return (
        <View style={styles.spinner}>
            <ActivityIndicator size="large" color="#007bff" style={{ transform: [{ scaleX: 2 }, { scaleY: 2 }] }} />
        </View>
    );
};

const styles = StyleSheet.create({
    spinner: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default LoadingSpinner;
