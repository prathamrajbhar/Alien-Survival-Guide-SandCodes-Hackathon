import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { db } from '../../firebaseConfig';
import LoadingSpinner from '../../components/LoadingSpinner';

const TipListScreen = ({ navigation }) => {
    const [tips, setTips] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = db.collection('tips').onSnapshot((snapshot) => {
            const tipsData = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setTips(tipsData);
            setIsLoading(false);
        });

        return unsubscribe;
    }, []);

    return (
        isLoading ? <LoadingSpinner /> :
            <ScrollView style={styles.container}>
                <FlatList
                    data={tips}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => navigation.navigate('TipDetail', { tipId: item.id })}>
                            <Text style={styles.tipItem}>{item.title}</Text>
                        </TouchableOpacity>
                    )}
                />
            </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 10,
    },
    tipItem: {
        padding: 16,
        fontSize: 18,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
});

export default TipListScreen;
