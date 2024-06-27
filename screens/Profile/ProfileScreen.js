import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { auth } from '../../firebaseConfig';
import CustomButton from '../../components/CustomButton';

const ProfileScreen = ({ navigation }) => {
    const handleLogout = async () => {
        try {
            await auth.signOut();
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <View style={styles.container}>
            <CustomButton style={styles.button} title="Edit Profile" onPress={() => navigation.navigate('EditProfile')} />
            <CustomButton style={styles.button} title="Logout" onPress={handleLogout} />

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
    }

});

export default ProfileScreen;
