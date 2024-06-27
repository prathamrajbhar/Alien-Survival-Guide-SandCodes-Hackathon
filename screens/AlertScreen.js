import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, ScrollView } from 'react-native';
import { db } from '../firebaseConfig';
import LoadingSpinner from '../components/LoadingSpinner';

const AlertScreen = () => {
    const [alerts, setAlerts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = db.collection('alerts').onSnapshot((snapshot) => {
            const alertsData = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setAlerts(alertsData);
            setIsLoading(false);
        });

        return unsubscribe;
    }, []);

    return (
        isLoading ? <LoadingSpinner /> :
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                <FlatList
                    data={alerts}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View style={styles.alertItem}>
                            <Text style={styles.alertTitle}>{item.title}</Text>
                            <Text style={styles.alertContent}>{item.content}</Text>
                        </View>
                    )}
                />
                <View style={{ height: 50 }} />

            </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    alertItem: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    alertTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    alertContent: {
        fontSize: 16,
    },
});

export default AlertScreen;
