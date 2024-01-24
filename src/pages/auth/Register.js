import React from 'react';
import { AuthContainer } from './styles/AuthContainer';
import { Card } from '../../components';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';

const Register = () => {
    return (
        <AuthContainer className='container'>
            
    
            <Card>
             <div className='form'>
             
                <h2>Registrarse</h2>
                
                <form>
                    <input 
                        type='email'
                        placeholder='Correo@gmail.com'
                        required
                    />

                    <input 
                        type='password'
                        placeholder='Contraseña'
                        required
                    />

                   <input 
                        type='password'
                        placeholder='Confirmar contraseña'
                        required
                    />
                    <button className='btn btn-primary btn-block'>Acceder</button>
                    
                </form>

                

                <span className='register'>
                    <p>
                        Ya tienes cuenta ?
                    </p>
                    <Link to={'/registro'}>Iniciar sesión</Link>
                </span>

                

             </div>
             </Card>
             <div className='img'>   
                 <img src='assets/register.svg' alt='registro' width={400}/>
            </div>
        </AuthContainer>
    );
}

export default Register;
