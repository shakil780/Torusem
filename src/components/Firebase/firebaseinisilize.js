import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";


const inisilizeAuthticatin=()=>{
    initializeApp(firebaseConfig);
}


export default inisilizeAuthticatin