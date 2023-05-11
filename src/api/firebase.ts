import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: process.env.FB_API_KEY || "",
    authDomain: process.env.FB_AUTH_DOMAIN || "m",
    databaseURL: process.env.FB_DATABASE_URL || "",
    projectId: process.env.FB_PROJECT_ID || "",
    storageBucket: process.env.FB_STORAGE_BUCKET || "",
    messagingSenderId: process.env.FB_MESSAGING_SENDER_ID || "",
    appId: process.env.FB_APP_ID || "",
    measurementId: process.env.FB_MEASUREMENT_ID || ""
};

const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);