import {initializeapp} from 'firebase/app';
import {getDatabase} from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyCaHL0IMjFgTHFIvLAJ8mmFsvyUURn8MiY",
  authDomain: "datasource-30ecd.firebaseapp.com",
  databaseURL: "https://datasource-30ecd-default-rtdb.firebaseio.com",
  projectId: "datasource-30ecd",
  storageBucket: "datasource-30ecd.appspot.com",
  messagingSenderId: "48114242614",
  appId: "1:48114242614:web:a1456a73ace1f43b33b497"
  
};

const app = initializeapp(firebaseConfig);

const db = getDatabase();

export default db;