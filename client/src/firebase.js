import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyCv8UAkdoVAMFX507Vq5VMySj9wshAJHFQ",
	authDomain: "fir-von.firebaseapp.com",
	projectId: "fir-von",
	storageBucket: "fir-von.appspot.com",
	messagingSenderId: "649582880854",
	appId: "1:649582880854:web:3bc3cc2108f5200f17b3f7",
	measurementId: "G-6G8DWW7XJD",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
