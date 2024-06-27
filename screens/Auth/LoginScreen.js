import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { auth } from '../../firebaseConfig';
import { TextInput } from 'react-native-paper';
import CustomButton from '../../components/CustomButton';

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = async () => {
        setIsLoading(true);
        try {
            await auth.signInWithEmailAndPassword(email.toLowerCase(), password);
        } catch (error) {
            alert(error.message);
        }
        setIsLoading(false);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <TextInput
                mode="outlined"
                style={styles.input}
                label="Email"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                mode="outlined"
                style={styles.input}
                label="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPassword}
                right={<TextInput.Icon icon={showPassword ? 'eye-off' : 'eye'} onPress={() => setShowPassword(!showPassword)} />
                }
            />

            <CustomButton style={styles.button} title={isLoading ? 'Loading...' : 'Login'} onPress={handleLogin} disabled={isLoading} />
            <CustomButton style={styles.button} title="Register" onPress={() => navigation.navigate('Register')} />
            <CustomButton style={styles.button} title="Forgot Password" onPress={() => navigation.navigate('ForgotPassword')} />
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
        height: 50,
    }
});

export default LoginScreen;
