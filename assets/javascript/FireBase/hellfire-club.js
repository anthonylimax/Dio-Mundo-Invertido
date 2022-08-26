import app from './Config.js'
import {getFirestore, collection, addDoc} from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js'

export default async function subscribeToHellfire(subscription){
    const database = getFirestore(app);
    const reference = collection(database, 'dados');
    const docRef = await addDoc(reference, subscription);
    return docRef.id
}