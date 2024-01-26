import React, { useState } from 'react';
import { AddProductContainer } from './AddProductContainer';
import Card from '../../card/Card';


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

const AddProducts = () => {

    const [products, setProducts] = useState({
        name:'',
        imageUrl:'',
        price:'',
        category:'',
        brand:'',
        desc:'',

    });

    const handleInputChange = (event)=>{
        const {name , value } = event.target;
        setProducts({
            ...products,
            [name]:value
        })
        ;
    }

    const handleImageChange = (event)=>{
        console.log(event);
    }

    return (
        <AddProductContainer>
            <h1>Agregar Nuevo producto</h1>
            <Card cardClass={'card'}>
                <form>
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
                     <div className='progress'>
                       <div className='progress-bar' >
                          Subiendo
                       </div>
                     </div>
                    <input 
                        type='file'
                        accept='image/*'
                        placeholder='Imagen Producto' 
                        name='image'
                        onChange={(e)=>handleImageChange(e)}
                    />
                    <input
                        type='text'
                        required
                        name='imageUrl'
                        disabled
                        value={products.imageUrl}
                    />
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
                        Crear Producto
                    </button>

                </form>


            </Card>
        </AddProductContainer>
    );
}

export default AddProducts;
