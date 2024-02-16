import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyCjirnACAnc2kzJf-eXx3zsrdHb3ttQ96Q",
	authDomain: "todo-fe-136.firebaseapp.com",
	projectId: "todo-fe-136",
	storageBucket: "todo-fe-136.appspot.com",
	messagingSenderId: "1030975441222",
	appId: "1:1030975441222:web:d3725c6c91a2f0d2913d47",
    databaseURL: "https://todo-fe-136-default-rtdb.europe-west1.firebasedatabase.app",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth(app);
