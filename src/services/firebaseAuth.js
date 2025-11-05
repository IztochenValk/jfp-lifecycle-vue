import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyC20-puwVt-FDLY_UbPICpXPgyh_q29APo",
  authDomain: "zozo-7f776.firebaseapp.com",
  databaseURL: "https://jfp-vue-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "zozo-7f776",
  storageBucket: "zozo-7f776.firebasestorage.app",
  messagingSenderId: "1013341728007",
  appId: "1:1013341728007:web:fa363d8a4c92ab2b1e29a2"
};

// Initialiser Firebase
const app = initializeApp(firebaseConfig);

// Exporter le service d'authentification pour l'utiliser dans les composants
export const auth = getAuth(app);
export const database = getDatabase(app); // Exporter l'instance de la base de données
