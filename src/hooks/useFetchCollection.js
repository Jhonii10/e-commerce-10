/* eslint-disable react-hooks/exhaustive-deps */
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../firebase/config";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";


export const UseFetchCollection = (collectionName) => {

    const [data, setData] = useState([]);
     const [isLoading, setIsLoading] = useState(false);

    
    const getCollection = () => {

        setIsLoading(true)

        try {
         const docRef = collection(db, collectionName);

         const q = query(docRef, orderBy("createdAt", "desc"),);
         
         onSnapshot(q, (Snapshot) => {
            const allData = Snapshot.docs.map((doc)=> {
             return {
                 id: doc.id,
                 ...doc.data(), 
             }
             
            })
            setData(allData) 
            setIsLoading(false)
            

         });

        } catch (error) {
          setIsLoading(false)
          toast.error(error.message)
        }
  }

  useEffect(() => {
    getCollection()
  }, []);



    return {

        //Propiedades
        data: data,
        isLoading: isLoading, 

    };
}


