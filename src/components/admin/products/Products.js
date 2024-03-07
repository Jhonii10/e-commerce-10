import { deleteDoc, doc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
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
import Search from '../../search/Search';
import { FILTER_BY_SEARCH } from '../../../redux/slice/filterSlice';
import Pagination from '../../pagination/Pagination';

const Products = () => {
    const [search, setSearch] = useState('');
    const {filteredProducts} = useSelector((state)=>state.filter);
    const {isLoading,data} = UseFetchCollection('products')
    
    const {products} = useSelector((state)=>state.product)
    
    const dispatch = useDispatch();

    //pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(12);

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct)

    useEffect(() => {
        dispatch(STORE_PRODUCTS({products: data}))
    }, [data, dispatch]);

    useEffect(() => {
        dispatch(FILTER_BY_SEARCH({products, search}))
    }, [dispatch, products, search]);

    
    
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
                <div>
                     <p>
                        <b>{filteredProducts.length}</b> Productos encontrados
                    </p>
                    <Search value={search} onChange={(event)=>{setSearch(event.target.value)}}/>
                </div>
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
                            currentProducts.map((product, index)=>{
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

            <Pagination
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                productsPerPage={productsPerPage}
                totalProducts={filteredProducts.length}
                
            />

        </ProductsContainer>
        </>
    );
}

export default Products;
