import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc, query, where, addDoc, writeBatch, documentId} from "firebase/firestore";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_REACT_APP_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_REACT_APP_FIREBASE_APP_ID,
    measurementId: import.meta.env.VITE_REACT_APP_FIREBASE_MEASUREMENT_ID
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

export async function technologyDB(){
    const technologyRef = collection(db, "technologyDB");
    const snapshot = await getDocs(technologyRef)
    
    const technologyDB = snapshot.docs.map((elem) => {
    let technology = elem.data()
    technology.id = elem.id;
    return technology;
});
    return technologyDB;
}

export async function certificatesDB(){
    const certificatesRef = collection(db, "certificatesDB");
    const snapshot = await getDocs(certificatesRef)
    
    const certificatesDB = snapshot.docs.map((elem) => {
    let certificate = elem.data()
    certificate.id = elem.id;
    return certificate;
});
    return certificatesDB;
}