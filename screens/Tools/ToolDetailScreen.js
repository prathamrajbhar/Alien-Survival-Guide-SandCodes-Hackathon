import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { db } from '../../firebaseConfig';
import LoadingSpinner from '../../components/LoadingSpinner';

const ToolDetailScreen = ({ route }) => {
    const { toolId } = route.params;
    const [tool, setTool] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchTool = async () => {
            const toolDoc = await db.collection('tools').doc(toolId).get();
            setTool(toolDoc.data());
            setIsLoading(false);
        };

        fetchTool();
    }, [toolId]);

    if (isLoading) {
        return <LoadingSpinner />;
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{tool.name}</Text>
            <Text style={styles.description}>{tool.description}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    title: {
        fontSize: 24,
        marginBottom: 16,
    },
    description: {
        fontSize: 16,
    },
});

export default ToolDetailScreen;
