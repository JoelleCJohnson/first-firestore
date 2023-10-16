//import tools we need from our libraries
import { initializeApp, cert } from "firebase-admin/app";//always used to connect from backend
import { getFirestore } from "firebase-admin/firestore";

//import our secret credentials
import { creds } from "./creds.js";

// connect to our Firebase project with our credentials (call house phone)
initializeApp({
    credential: cert(creds),
});

//once connected, connect to Firestore database(ask for household member you called for)
export const db = getFirestore();