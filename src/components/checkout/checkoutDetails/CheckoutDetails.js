/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { CheckoutDetailsContainer } from './CheckoutDetailsContainer';

const initialDataState = {
    name: "",
    lastname:"",
    email: "" ,
    phoneNumber:"",
}

const CheckoutDetails = () => {

    const [shippingAdreess, setShippingAdreess] = useState(initialDataState);

    const handleShipping = (e)=>{
        const { name, value } = e.target;
        setShippingAdreess({ ...shippingAdreess, [name]: value });
    }


    const handleSubmit = (e)=>{
        e.preventDefault();
    }
    
    return (
        <CheckoutDetailsContainer>
            <div className='container'>
            <div className='row'>
                <div className='col col-1'>
                <div className='card'>
                <div className='step-header'>Datos de envio</div>
                    <div className='card-body'>
                    <form onSubmit={handleSubmit}>
                        <div className="row">
                               <div className='col col-sm-10'>
                                <div className='form-group'>
                                <label className="label-field" >
                                    Nombre
                                </label>
                                <input
                                    className="form-control"
                                    type="text"
                                    name='name' 
                                    value={shippingAdreess.name}
                                    onChange={(e)=>handleShipping(e)}
                                    required
                                    
                                />
                                </div>
                                </div>

                                <div className='col col-sm-10'>
                                <div className='form-group'>
                                <label className="label-field" >
                                    Apellido
                                </label>
                                <input
                                    className="form-control"
                                    type="text"
                                    name='lastname' 
                                    value={shippingAdreess.lastname}
                                    onChange={(e)=>handleShipping(e)}
                                    required
                                />
                                </div>
                                </div>

                        </div>

                        <div className="row">
                               <div className='col col-sm-10'>
                                <div className='form-group'>
                                <label className="label-field" >
                                    Correo electronico
                                </label>
                                <input
                                    className="form-control"
                                    type="text"
                                    name='email' 
                                    value={shippingAdreess.email}
                                    onChange={(e)=>handleShipping(e)}
                                    required
                                />
                                </div>
                                </div>

                                <div className='col col-sm-10'>
                                <div className='form-group'>
                                <label className="label-field" >
                                    Celular
                                </label>
                                <input
                                    className="form-control"
                                    type="text"
                                    name='phoneNumber' 
                                    defaultValue={shippingAdreess.phoneNumber}
                                    onChange={(e)=>handleShipping(e)}
                                    required
                                    
                                />
                                </div>
                                </div>

                        </div>

                        <div className='select-address-box'>
                            <h4>Dirección de envío</h4>
                            <div className='address-alert'>Ingresa la dirección de envío</div>
                            <div className='new-address'>
                            <div className="dir-line">
                                <label className="label-field" >
                                    Dirección
                                </label>
                                <input
                                    type="text"
                                    name=""
                                    className="form-control"
                                    placeholder="Dirección (incluir info adicional como Apto, Torre, etc)"
                                    autoComplete="off"
                                    required
                                />
                            </div>

                            <div className="dir-line">
                                <label className="label-field" >
                                  Identificacion
                                </label>
                                <input
                                    type="text"
                                    name=""
                                    className="form-control "
                                    placeholder="Cédula o Documento de Identificación (escribir sólo números)"
                                    autoComplete="off"
                                />
                            </div>

                            <div className="row">
                               <div className='col col-sm-10'>
                                <div className='form-group'>
                                <label className="label-field" >
                                    Cuidad
                                </label>
                                <input
                                    className="form-control"
                                    type="text"
                                    name='email' 
                                    value={shippingAdreess.email}
                                    onChange={(e)=>handleShipping(e)}
                                    required
                                />
                                </div>
                                </div>

                                <div className='col col-sm-10'>
                                <div className='form-group'>
                                <label className="label-field" >
                                    Departamento
                                </label>
                                <input
                                    className="form-control"
                                    type="text"
                                    name='phoneNumber' 
                                    defaultValue={shippingAdreess.phoneNumber}
                                    onChange={(e)=>handleShipping(e)}
                                    required
                                />
                                </div>
                                </div>

                        </div>


                            </div>
                            <label htmlFor="order_terms" className="terms-block mt-3">
                            <div> 
                                <input
                                required
                                type="checkbox"
                                name="terms"

                                />
                            </div>
                            <p>
                                <span>
                                He leído y acepto las{" "}
                                <strong>
                                    <a
                                    // eslint-disable-next-line no-script-url
                                    href="javascript:;"
                                    >
                                    términos y condiciones
                                    </a>
                                </strong>{" "}
                                de mi pedido
                                </span>
                            </p>
                            </label>
                            <div>
                                <button
                                type='submit'
                                >
                                    Continuar
                                </button>
                            </div>
                        </div>

                    </form>
                    </div>
                        
                    </div>
                </div>
                <div className='col col-2'>
                <div className='card'>
                <div className='step-header'>Resumen de compra</div>
                </div>
                </div>
                </div>
            </div>
        </CheckoutDetailsContainer>
    );
}

export default CheckoutDetails;
