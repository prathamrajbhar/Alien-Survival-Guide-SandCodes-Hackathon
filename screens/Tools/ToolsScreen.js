import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { db } from '../../firebaseConfig';
import LoadingSpinner from '../../components/LoadingSpinner';

const ToolsScreen = ({ navigation }) => {
    const [tools, setTools] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = db.collection('tools').onSnapshot((snapshot) => {
            const toolsData = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setTools(toolsData);
            setIsLoading(false);
        });

        return unsubscribe;
    }, []);

    return (
        isLoading ? <LoadingSpinner /> :
            <View style={styles.container}>
                <FlatList
                    data={tools}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => navigation.navigate('ToolDetail', { toolId: item.id })}>
                            <Text style={styles.toolItem}>{item.name}</Text>
                        </TouchableOpacity>
                    )}
                />
            </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    toolItem: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        fontSize: 18,
    },
});

export default ToolsScreen;
