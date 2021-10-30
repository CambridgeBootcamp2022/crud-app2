import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyClZUeM9Q8WhiXGE1m-MXauGHnhW3670rg",
  authDomain: "groundgurusdemo.firebaseapp.com",
  projectId: "groundgurusdemo",
  storageBucket: "groundgurusdemo.appspot.com",
  messagingSenderId: "45653986509",
  appId: "1:45653986509:web:f6295ab262c3313847ed84"
};

const app = initializeApp(firebaseConfig);

export default app;
