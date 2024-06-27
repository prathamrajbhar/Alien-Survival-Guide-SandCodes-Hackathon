import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import CustomButton from '../components/CustomButton';

const SettingsScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <CustomButton style={styles.button} title="Change Password" onPress={() => navigation.navigate('ForgotPassword')} />
            <CustomButton style={styles.button} title="Back to Home" onPress={() => navigation.navigate('Home')} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    button: {
        marginBottom: 16,
        width: '100%',
    },
});

export default SettingsScreen;
