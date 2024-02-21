/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { CheckoutDetailsContainer } from './CheckoutDetailsContainer';
import { RegionDropdown } from 'react-country-region-selector';
import CheckoutSummary from './CheckoutSummary';
import { useDispatch } from 'react-redux';
import { SAVE_SHIPPING_ADDRESS, SAVE_SHIPPING_DATE } from '../../../redux/slice/checkoutSlice';
import { useNavigate } from 'react-router-dom';

const initialDataState = {
    name: "",
    lastname:"",
    email: "" ,
    phoneNumber:"",
}

const initialAddressState = {
    address:'',
    id:'',
    city:'',
    country:'',
}

const CheckoutDetails = () => {

    const [dateState, setDateState] = useState(initialDataState);
    const [addressState, setaddressState] = useState(initialAddressState);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    

    const handleDate = (e)=>{
        const { name, value } = e.target;
        setDateState({ ...dateState, [name]: value });
    }

    const handleAddress = (e)=>{
        const { name, value } = e.target;
        setaddressState({ ...addressState, [name]: value });
    }


    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch(SAVE_SHIPPING_DATE(dateState))
        dispatch(SAVE_SHIPPING_ADDRESS(addressState))
        navigate('payment')
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
                                    value={dateState.name}
                                    onChange={(e)=>handleDate(e)}
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
                                    value={dateState.lastname}
                                    onChange={(e)=>handleDate(e)}
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
                                    value={dateState.email}
                                    onChange={(e)=>handleDate(e)}
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
                                    defaultValue={dateState.phoneNumber}
                                    onChange={(e)=>handleDate(e)}
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
                                    name="address"
                                    className="form-control"
                                    placeholder="Dirección (incluir info adicional como Apto, Torre, etc)"
                                    autoComplete="off"
                                    required
                                    value={addressState.address}
                                    onChange={(e)=>handleAddress(e)}
                                />
                            </div>

                            <div className="dir-line">
                                <label className="label-field" >
                                  Identificacion
                                </label>
                                <input
                                    type="text"
                                    name="id"
                                    className="form-control "
                                    placeholder="Cédula o Documento de Identificación (escribir sólo números)"
                                    autoComplete="off"
                                    value={addressState.id}
                                    onChange={(e)=>handleAddress(e)}

                                />
                            </div>

                            <div className="row">
                               
                                <div className='col col-sm-10'>
                                <div className='form-group'>
                                <label className="label-field" >
                                    Departamento
                                </label>
                                

                            <RegionDropdown
                                classes='form-control'
                                country='Colombia'
                                value={addressState.country}
                                defaultOptionLabel='Selecione el Departamento'
                                onChange={(val)=>handleAddress({target: {name: "country",value: val,}})}
                                required
                            />
                                
                                
                                </div>
                                </div>

                                <div className='col col-sm-10'>
                                <div className='form-group'>
                                <label className="label-field" >
                                    Cuidad
                                </label>
                                <input
                                    className="form-control"
                                    type="text"
                                    name='city' 
                                    value={addressState.city}
                                    onChange={(e)=>handleAddress(e)}
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
                            <div className="proceed-to-checkout text-center pb-4">
                            <button type="submit" className="btn btn-xlg btn-success up-bold">
                                CONTINUAR
                                
                            </button>
                            </div>
                        </div>

                    </form>
                    </div>
                        
                    </div>
                </div>
                <div className='col col-2'>
                <CheckoutSummary/>
                </div>
                </div>
            </div>
        </CheckoutDetailsContainer>
    );
}

export default CheckoutDetails;
