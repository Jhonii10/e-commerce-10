import { doc, getDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../firebase/config';
import { toast } from 'react-toastify';

export const UseFetchDocument = (collection, id)=>{
    
    const [document, setDocument] = useState(null);

    const getDocument = async ()=>{
       
        const docRef = doc(db, collection, id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
        const obj = {
            id:id,
            ...docSnap.data(),
        }
        setDocument(obj);
        } else {
        toast.error('Documento no encontrado')
}
    }
    
 
    useEffect(() => {
        getDocument()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);  

    return{
            // atributos 
            document
    }
}

