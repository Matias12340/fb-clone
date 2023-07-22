import firebase from "./firebase";

const firebaseConfig = { 
  apiKey : "AIzaSyApaqI4tMOvdCZ4WkAFQkmNF5A87GKDuyU" , 
  authDomain : "facebook-clone-8c7d5.firebaseapp.com" , 
  projectId : "facebook-clone-8c7d5" , 
  storageBucket : "facebook-clone-8c7d5.appspot.com" , 
  messagingSenderId : "209460944574" , 
  appId : "1:209460944574:web:c56d3e705a10a8290b48ef" , 
  measurementId : "G-45W7HBRB93" 
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoofleAuthProvider();

export {auth, provider};
export default db;
