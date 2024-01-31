import React, { useEffect, useState } from 'react';
import { AddProductContainer } from './AddProductContainer';
import Card from '../../card/Card';
import { deleteObject, getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { db, storage } from '../../../firebase/config';
import { toast } from 'react-toastify';
import { Timestamp, addDoc, collection, doc, setDoc } from 'firebase/firestore';
import Loader from '../../loader/Loader';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';


const categories = [
    {
        id:1,
        nombre:'Portatiles'
    },
    {
        id:2,
        nombre:'Electronica'
    },
    {
        id:3,
        nombre:'Belleza'
    },
    {
        id:4,
        nombre:'Celulares'
    }
]

const initialState = {
        name:'',
        imageUrl:'',
        price:0,
        category:'',
        brand:'',
        desc:'',
}

const AddProducts = () => {

    const {id} = useParams();

    const { products : allProducts } = useSelector(state => state.product);

    const editProduct = allProducts.find((item)=>item.id === id)
    
    const detectForm = (id , f1, f2)=>{

        if (id === 'add') {
           return f1
        }else{
           return f2
        }
  }

    const [products, setProducts] = useState(()=>detectForm(id,{...initialState},{...editProduct}));

    useEffect(() => {
        setProducts(()=>detectForm(id,{...initialState},{...editProduct}))
    }, [editProduct, id]);

    const [uploadProgress, setUploadProgress] = useState(0);

    const [isLoading, setIsLoading] = useState(false);



    

    const navigate =  useNavigate();

    const handleInputChange = (event)=>{
        const {name , value } = event.target;
        setProducts({
            ...products,
            [name]:value
        })
        ;
    }

    

    const handleImageChange = (event)=>{

        const file = event.target.files[0];
        const storageRef = ref(storage, `eShop/${Date.now()}${file.name}`)
        const uploadTask = uploadBytesResumable(storageRef, file);
        uploadTask.on('state_changed', 
        (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setUploadProgress(progress)
        }, 
        (error) => {
            toast.error(error.message)
        }, 
        () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setProducts({...products, imageUrl:downloadURL});
            toast.success('Imagen cargada exitosamente.');
            });
        }
        );
        }   

    const handleAddProduct = async (event)=>{
        event.preventDefault();

        setIsLoading(true)

        try {
            await addDoc(collection(db, "products"), {
                name: products.name,
                imageUrl:products.imageUrl,
                price:Number(products.price),
                category:products.category,
                brand:products.brand,
                desc:products.desc,
                createdAt: Timestamp.now().toDate()

              });
              setIsLoading(false)
              toast.success('Producto subido exitosamente')
              setUploadProgress(0)
              setProducts(initialState)
              navigate('/admin/products')
            
        } catch (error) {
              setIsLoading(false)
              toast.error(error.message)
        }

        
    }

    const handleEditProduct = async (event)=>{
        event.preventDefault();
        setIsLoading(true)

        if(products.imageUrl !== editProduct.imageUrl){

            const desertRef = ref(storage, editProduct.imageUrl);
            await deleteObject(desertRef)
        }

        try {
            
            await setDoc(doc(db, "products", id), {
                name: products.name,
                imageUrl:products.imageUrl,
                price:Number(products.price),
                category:products.category,
                brand:products.brand,
                desc:products.desc,
                createdAt: editProduct.createdAt,
                editedAt: Timestamp.now().toDate(),
            })
            setIsLoading(false)
            toast.success('Producto editado exitosamente')
            navigate('/admin/products')
        } catch (error) {
            setIsLoading(false)
            toast.error(error.message)
        }
            
        }
    

    return (
        <>
        {
            isLoading && <Loader/>
        }
        <AddProductContainer>
            <h2>{detectForm(id,'Agregar Nuevo Producto','Editar Producto')}</h2>
            <Card cardClass={'card'}>
                <form onSubmit={detectForm(id, handleAddProduct, handleEditProduct)}>
                    <label>Nombre Del Producto</label>
                    <input 
                        type='text' 
                        placeholder='Nombre del producto' 
                        required 
                        name='name'
                        value={products.name}
                        onChange={(e)=>handleInputChange(e)}
                    />
                    <label>Imagen del producto</label>
                    <Card cardClass={'group'}>
                    
                    {
                        uploadProgress === 0 ? null : (
                            <div className='progress'>
                                <div 
                                    className='progress-bar' 
                                    style={{width:`${uploadProgress}%`}}
                                    >
                                    {
                                        uploadProgress < 100 ? `Cargando ${uploadProgress}`
                                        :`Carga completa ${uploadProgress}%`
                                    }
                                </div>
                            </div>

                        )
                    }
                    <input 
                        type='file'
                        accept='image/*'
                        placeholder='Imagen Producto' 
                        name='image'
                        onChange={(e)=>handleImageChange(e)}
                    />
                    {
                        products.imageUrl === '' ? null :(
                            <input
                                type='text'
                                // required
                                placeholder='Url de la imagen'
                                name='imageUrl'
                                disabled
                                value={products.imageUrl}
                            />
                        )
                    }
                    
                    </Card>
                    <label>Precio Del Producto</label>
                    <input 
                        type='text' 
                        placeholder='Precio del producto' 
                        required 
                        name='price'
                        value={products.price}
                        onChange={(e)=>handleInputChange(e)}
                    />
                    <label>Categoria Del Producto</label>
                    <select
                        name='category'
                        required
                        value={products.category}
                        onChange={(e)=>handleInputChange(e)}
                    >
                        <option value='' disabled>
                            Elige la categoria del producto
                        </option>
                        {
                            categories.map((category)=>(
                                <option key={category.id} value={category.nombre}>
                                    {category.nombre}
                                </option>
                            ))
                        }

                    </select>
                    <label>Marca Del Producto</label>
                    <input 
                        type='text' 
                        placeholder='Marca del producto' 
                        required 
                        name='brand'
                        value={products.brand}
                        onChange={(e)=>handleInputChange(e)}
                    />
                    <label>Descripcion Del Producto</label>
                    <textarea
                        
                        name='desc'
                        cols={30}
                        rows={10}
                        value={products.desc}
                        onChange={(e)=>handleInputChange(e)}
                    />
                   


                    <button className='btn btn-black'>
                        {detectForm(id,'Crear Producto','Guardar Cambios ')}
                    </button>

                </form>


            </Card>
        </AddProductContainer>
        </>
    );
}

export default AddProducts;
