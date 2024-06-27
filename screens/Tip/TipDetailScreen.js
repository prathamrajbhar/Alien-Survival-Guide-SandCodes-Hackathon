import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { db } from '../../firebaseConfig';
import LoadingSpinner from '../../components/LoadingSpinner';

const TipDetailScreen = ({ route }) => {
    const { tipId } = route.params;
    const [tip, setTip] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchTip = async () => {
            const tipDoc = await db.collection('tips').doc(tipId).get();
            setTip(tipDoc.data());
            setIsLoading(false);
        };

        fetchTip();
    }, [tipId]);

    if (isLoading) {
        return <LoadingSpinner />;
    }
    return (
        <ScrollView style={styles.container}>
            <Image source={{ uri: tip.image }} style={styles.image} />
            <Text style={styles.title}>{tip.title}</Text>
            <Text style={styles.content}>{tip.content}</Text>
            {tip.content.map((content, index) => (
                <Text key={index} style={styles.content}>
                    {content}
                </Text>
            ))}
            <View style={{ height: 50 }} />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 16,
        padding: 16,

    },
    image: {
        width: '100%',
        height: 400,
        marginBottom: 16,
        borderRadius: 8,
    },
    title: {
        fontSize: 24,
        marginBottom: 16,
    },
    content: {
        fontSize: 16,
    },
});

export default TipDetailScreen;
