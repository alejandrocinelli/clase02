
import { async } from "@firebase/util";
import React from 'react'
import swal from 'sweetalert';
import { data } from "autoprefixer";
import { initializeApp } from "firebase/app";
import reportWebVitals from "../reportWebVitals";

import {getFirestore, doc, addDoc, collection, getDoc, getDocs, query, where, Timestamp} from 'firebase/firestore/lite' 

const firebaseConfig = {
    apiKey: process.env.REACT_APP_APIKEY,
    authDomain: process.env.REACT_APP_AUTHDOMAIN,
    projectId: process.env.REACT_APP_PROJECTID,
    storageBucket: process.env.REACT_APP_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
    appId: process.env.REACT_APP_APPID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestoreDB = getFirestore(app)

export default firestoreDB

export async function getAllItems(){

    const miColec = collection(firestoreDB,'items')
    const movieSnap = await getDocs(miColec)

    return movieSnap.docs.map (doc => {
        
        return {...doc.data(), id: doc.id}
        
    })
}

export async function getItemByCategory (categoryid) {

    const miColec = collection(firestoreDB,'items')
    const queryMovie = query(miColec,where("genero","==",categoryid)); //con esta linea hago una query a miColec 
    const movieSnap = await getDocs(queryMovie)
     
    return movieSnap.docs.map (doc => {
        
        return {...doc.data(), id: doc.id}
        
    })
}

export async function getItem (id) {

    const miColec = collection(firestoreDB,'items')
    const movieRef = doc(miColec,id) // puedo traer un documento por su id 
    const movieSnap = await getDoc (movieRef)
    return  {
        ...movieSnap.data(),
        id: movieSnap.id
    }

}

export async function createBuyOrder (orderData){
    const buyTimestamp= Timestamp.now()

    const orderWriteDate = {
        ...orderData, date: buyTimestamp
    }
    
    const miColec = collection(firestoreDB,"buyOrders")
    const orderDoc = await addDoc(miColec,orderWriteDate)
    swal("Compra procesada", orderDoc.id + "...es su numero de ID!");
    
}

reportWebVitals();
