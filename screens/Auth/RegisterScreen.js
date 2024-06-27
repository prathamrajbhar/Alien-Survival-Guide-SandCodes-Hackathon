import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { auth } from '../../firebaseConfig';
import { TextInput } from 'react-native-paper';
import CustomButton from '../../components/CustomButton';

const RegisterScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleRegister = async () => {
        if (password !== confirmPassword) {
            alert("Passwords don't match");
            return;
        }
        try {
            await auth.createUserWithEmailAndPassword((email).toLowerCase(), password);
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Register</Text>
            <TextInput
                mode="outlined"
                label="Email"
                style={styles.input}
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                mode="outlined"
                label="Password"
                style={styles.input}
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <TextInput
                mode="outlined"
                label="Confirm Password"
                style={styles.input}
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry
            />
            <CustomButton style={styles.button} title="Register" onPress={handleRegister} />
            <CustomButton style={styles.button} title="Back to Login" onPress={() => navigation.navigate('Login')} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 28,
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

export default RegisterScreen;
