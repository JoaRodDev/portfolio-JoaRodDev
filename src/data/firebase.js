import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc, query, where, addDoc, writeBatch, documentId} from "firebase/firestore";

require('dotenv').config();

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function proyectsDB(){
    const proyectsRef = collection(db, "proyectsDB");
    const snapshot = await getDocs(proyectsRef)
    
    const proyectsDB = snapshot.docs.map((elem) => {
    let proyects = elem.data()
    proyects.id = elem.id;
    return proyects;
});
    return proyectsDB;
}

export async function getProyect(idp){
    const proyectsRef = collection(db, "proyectsDB")
    const docRef = doc(proyectsRef, idp)
    const snapshot = await getDoc(docRef);
    return {...snapshot.data(), id: snapshot.id}
}

export async function proyectsCategory(categoryUrl){
    const proyectsRef = collection(db, "proyectsDB")

    const q = query(proyectsRef, where("category", "==", categoryUrl))
    const snapshot = await getDocs(q);

    const proyectsCategory = snapshot.docs.map((elem) => {
        let proyects = elem.data();
        proyects.id = elem.id;
        return proyects
    });
    return proyectsCategory;
}