import { deleteDoc, doc } from 'firebase/firestore';
import React, { useEffect } from 'react';
import { toast } from 'react-toastify';
import { db, storage } from '../../../firebase/config';
import ProductsContainer from './ProductsContainer';
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from 'react-router-dom';
import Loader from '../../loader/Loader';
import { deleteObject, ref } from 'firebase/storage';
import Notiflix from 'notiflix';
import { UseFetchCollection } from '../../../hooks/useFetchCollection';
import { useDispatch, useSelector } from 'react-redux';
import { STORE_PRODUCTS } from '../../../redux/slice/productSlice';

const Products = () => {

    const {isLoading,data} = UseFetchCollection('products')
    
    const {products} = useSelector((state)=>state.product)
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(STORE_PRODUCTS({products: data}))
    }, [data, dispatch]);
    
    const confirmDelete = (id, imageUrl)=>{
        Notiflix.Confirm.show(
            'Eliminar Producto',
            '¿Estas seguro que quieres eliminar este producto?',
            'Eliminar',
            'Cancelar',
            function okCb() {
                deleteProduct(id, imageUrl)
            },
            function cancelCb() {
              return
            },
            {
              width: '320px',
              borderRadius: '8px',
              titleColor:'black',
              okButtonBackground:'black',
              cssAnimationStyle:'zoom',

            },
          );
    }

    const deleteProduct = async(id , imageUrl)=>{
        try {
            await deleteDoc(doc(db, "products", id));

            const desertRef = ref(storage, imageUrl);

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
                            <th>Ítem</th>
                            <th>Imagen</th>
                            <th>Nombre</th>
                            <th>Categoria</th>
                            <th>Precio</th>
                            <th>Opciones</th>
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
                                       <td className='table-image'>
                                        <img src={imageUrl} alt={name}/>
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
                                        <Link to={`/admin/add-products/${id}`}>
                                            <FaRegEdit size={20} color='green'/>
                                        </Link>
                                        &nbsp;
                                        <MdDelete 
                                            size={20} 
                                            color='red'
                                            onClick={()=>confirmDelete(id, imageUrl)}    
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
