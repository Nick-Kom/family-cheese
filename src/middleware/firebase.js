import { initializeApp } from "firebase/app"
//import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
	apiKey: "AIzaSyDDoF4hVEByUUIy7ehQQYiIVoN5EzXZLCY",
	authDomain: "sweet-burger-zv.firebaseapp.com",
	projectId: "sweet-burger-zv",
	storageBucket: "sweet-burger-zv.appspot.com",
	messagingSenderId: "913878154134",
	appId: "1:913878154134:web:1019ae75e30c0533ffbbb7",
	measurementId: "G-PZ7KBJSMTY"
}

export const app = initializeApp(firebaseConfig)
//const analytics = getAnalytics(app);
export const auth = getAuth(app)
