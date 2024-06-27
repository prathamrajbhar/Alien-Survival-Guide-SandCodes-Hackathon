import firebase from './Firebase';  // Assuming Firebase is properly configured

const db = firebase.firestore();

export const addData = async (collection, data) => {
    try {
        await db.collection(collection).add(data);
        console.log('Data added successfully');
    } catch (error) {
        console.error('Error adding data:', error);
    }
};

export const getData = async (collection) => {
    try {
        const snapshot = await db.collection(collection).get();
        return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
        console.error('Error getting data:', error);
        return [];
    }
};
