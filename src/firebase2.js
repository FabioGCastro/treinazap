import firebase from 'firebase';	

const firebaseConfig = {	
    apiKey: "AIzaSyBxBgdDpZS9cVUE5FN0sEiX1yK4rKTnqjE",
    authDomain: "treinazap2.firebaseapp.com",
    projectId: "treinazap2",
    storageBucket: "treinazap2.appspot.com",
    messagingSenderId: "999974237133",
    appId: "1:999974237133:web:478b78fdc88188a04cca84",
    measurementId: "G-MEASUREMENT_ID",
};	

const firebaseApp = firebase.initializeApp(firebaseConfig);	

const db = firebaseApp.firestore();	
const auth = firebase.auth();	
const provider = new firebase.auth.GoogleAuthProvider();	
const storage = firebase.storage();

export { auth, provider, storage, firebase };	
export default db;  
