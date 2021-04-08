import firebaseClient from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
  
    apiKey: "AIzaSyA6DYQ2zXcimNGeqTxBDRDcSNEq8qnWS_o",
    authDomain: "clocker-203dd.firebaseapp.com",
    projectId: "clocker-203dd",
    storageBucket: "clocker-203dd.appspot.com",
    messagingSenderId: "665246304560",
    appId: "1:665246304560:web:f16d825751774b5129a0f5",
    measurementId: "G-B12481F4CZ"
};

const app = firebaseClient.apps.length 
  ? firebaseClient.app() 
  : firebaseClient.initializeApp(firebaseConfig)

export const persistenceMode = firebaseClient.auth.Auth.Persistence.LOCAL

export { firebaseClient }