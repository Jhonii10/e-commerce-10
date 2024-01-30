import { collection, deleteDoc, doc, onSnapshot, orderBy, query } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { db, storage } from '../../../firebase/config';
import ProductsContainer from './ProductsContainer';
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from 'react-router-dom';
import Loader from '../../loader/Loader';
import { deleteObject, ref } from 'firebase/storage';

const Products = () => {

     const [products, setProducts] = useState([]);
     const [isLoading, setIsLoading] = useState(false);

     const getProducts = () => {
           setIsLoading(true)

           try {
            const productsRef = collection(db, "products");
            const q = query(productsRef, orderBy("createdAt", "desc"),);
            
            onSnapshot(q, (Snapshot) => {
               const allProducts = Snapshot.docs.map((doc)=> {
                return {
                    id: doc.id,
                    ...doc.data()
                }
                
               })
               setProducts(allProducts) 
               setIsLoading(false)  
            });

           } catch (error) {
             setIsLoading(false)
             toast.error(error.message)
           }
     }

     useEffect(() => {
        getProducts()
     }, []);

    const deleteProduct = async(id , imageUrl)=>{
        try {
            await deleteDoc(doc(db, "products", id));

            const desertRef = ref(storage, imageUrl);

            // Delete the file
            await deleteObject(desertRef)

            toast.success('Producto Eliminado exitosamente')
            
        } catch (error) {
            toast.error(error.message)
        }
    }
    return (
        <>
        {
            isLoading && <Loader/>  
        }
        <ProductsContainer>
            <h2>Todos Los Productos</h2>
            {
                products.length === 0 
                ? (
                   <p>Productos no encontrados</p> 
                ):(
                    <table>
                        <thead>
                        <tr>
                            <th>S/N</th>
                            <th>Imagen</th>
                            <th>Nombre</th>
                            <th>Categoria</th>
                            <th>Precio</th>
                            <th>opciones</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            products.map((product, index)=>{
                                const {id , name , price , imageUrl , category} = product

                                return(
                                    
                                    <tr key={id}>
                                      <td>
                                        {index + 1}
                                      </td>
                                       <td>
                                        <img src={imageUrl} alt={name} style={{width:'100px' , height:'80px', objectFit:'cover'}}/>
                                       </td>
                                       <td>
                                        {name}
                                       </td>
                                       <td>
                                        {category}
                                       </td>
                                       <td>
                                        {`$${price}`}
                                       </td>
                                       <td>
                                        <Link to={'/admin/add-products'}>
                                            <FaRegEdit size={20} color='green'/>
                                        </Link>
                                        &nbsp;
                                        <MdDelete 
                                            size={20} 
                                            color='red'
                                            onClick={()=>deleteProduct(id , imageUrl)}    
                                            />
                                       </td>
                                    </tr>
                                    
                                )
                            })
                        }
                        </tbody>
                    </table>

                )
            }

        </ProductsContainer>
        </>
    );
}

export default Products;
