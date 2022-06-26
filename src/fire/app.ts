import { getApp, initializeApp } from 'firebase/app';
import { connectAuthEmulator, getAuth } from 'firebase/auth';
import { connectFunctionsEmulator, getFunctions } from 'firebase/functions';

const config = {
  apiKey: 'AIzaSyA0vyBzHgv8ePnHQ-NS_rnrCCjXzwEWt2c',
  authDomain: 'play-fire-auth.firebaseapp.com',
  projectId: 'play-fire-auth',
  storageBucket: 'play-fire-auth.appspot.com',
  messagingSenderId: '115207458542',
  appId: '1:115207458542:web:4184054fa3c4966372edff',
  measurementId: 'G-1FHTJKJ1R4',
};

initializeApp(config);

if (!import.meta.env.PROD) {
  connectAuthEmulator(getAuth(), 'http://localhost:9099', { disableWarnings: true });
  connectFunctionsEmulator(getFunctions(getApp(), 'asia-northeast1'), 'localhost', 5001);
}
