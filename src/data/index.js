
import { async } from "@firebase/util";
import React from 'react'
import swal from 'sweetalert';
import { data } from "autoprefixer";
import { initializeApp } from "firebase/app";
import {getFirestore, doc, addDoc, collection, getDoc, getDocs, query, where, Timestamp} from 'firebase/firestore/lite' 

const firebaseConfig = {
  apiKey: "AIzaSyD3M4tn4qlAS0VOih4ioVvPLFtpI8zKbl4",
  authDomain: "react31160-d5e12.firebaseapp.com",
  projectId: "react31160-d5e12",
  storageBucket: "react31160-d5e12.appspot.com",
  messagingSenderId: "797027020171",
  appId: "1:797027020171:web:a7b7c9ed2ef8436aa2d38e"
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

