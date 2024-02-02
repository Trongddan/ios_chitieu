import {initializeApp} from 'firebase/app';
import {getDatabase} from 'firebase/database';

const firebaseConfig = {
  apiKey: 'XXXXXXXXXXXXXXXXXXXXXXX',
  authDomain: 'todoapp-XXXX.firebaseapp.com',
  databaseURL:
    'https://finance-5078f-default-rtdb.asia-southeast1.firebasedatabase.app/',
  projectId: 'todoapp-XXXX',
  storageBucket: 'todoapp-XXXX.appspot.com',
  messagingSenderId: 'XXXXXXX',
  appId: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
};
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export {db};
