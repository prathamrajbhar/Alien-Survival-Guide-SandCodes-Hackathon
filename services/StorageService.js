import firebase from './Firebase';  // Assuming Firebase is properly configured

const storage = firebase.storage();

export const uploadFile = async (fileUri, filename) => {
    const response = await fetch(fileUri);
    const blob = await response.blob();

    const ref = storage.ref().child(filename);
    try {
        await ref.put(blob);
        console.log('File uploaded successfully');
    } catch (error) {
        console.error('Error uploading file:', error);
    }
};
