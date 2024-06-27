import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { auth } from '../../firebaseConfig';
import { TextInput } from 'react-native-paper';
import CustomButton from '../../components/CustomButton';

const ForgotPasswordScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');

    const handleForgotPassword = async () => {
        try {
            await auth.sendPasswordResetEmail(email);
            alert('Password reset link sent to your email');
            navigation.navigate('Login');
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Forgot Password</Text>
            <TextInput
                mode="outlined"
                label="Email"
                style={styles.input}
                value={email}
                onChangeText={setEmail}
            />
            <CustomButton style={styles.button} title="Send Reset Link" onPress={handleForgotPassword} />
            <CustomButton style={styles.button} title="Back to Login" onPress={() => navigation.navigate('Login')} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
    },
    title: {
        fontSize: 24,
        marginBottom: 24,
        textAlign: 'center',
    },
    input: {
        marginBottom: 20,
    },
    button: {
        marginBottom: 16,
        width: '100%',
    }
});

export default ForgotPasswordScreen;
