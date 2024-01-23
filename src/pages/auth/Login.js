import React from 'react';
import { AuthContainer } from './styles/AuthContainer';
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { Card } from '../../components';

const Login = () => {
    return (
        <AuthContainer className='container'>
            <div className='img'>   
                 <img src='assets/login.svg' alt='login' width={400}/>
            </div>
    
            <Card>
             <div className='form'>
             
                <h2>Iniciar sesión</h2>
                
                <form>
                    <input 
                        type='email'
                        placeholder='correo@gmail.com'
                        required
                    />

                    <input 
                        type='password'
                        placeholder='contraseña'
                        required
                    />
                    <button className='btn btn-primary btn-block'>Acceder</button>
                    <div className='links'>
                        <Link to={'/reset'}>Olvidates tu contraseña</Link>
                    </div>
                    <p>Iniciar sesión con</p>
                </form>

                <button className='btn btn-danger btn-block'>
                    <FcGoogle size={24}/>
                     Google
                </button>

                <span className='register'>
                    <p>
                        No tienes cuenta ?
                    </p>
                    <Link to={'/registro'}>Registrarse</Link>
                </span>

                

             </div>
             </Card>
        </AuthContainer>
    );
}

export default Login;
