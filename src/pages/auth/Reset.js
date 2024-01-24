import React from 'react';
import { AuthContainer } from './styles/AuthContainer';
import { Card } from '../../components';
import { Link } from 'react-router-dom';

const Reset = () => {
    return (
        <AuthContainer className='container'>
        <div className='img'>   
             <img src='assets/reset.svg' alt='login' width={400}/>
        </div>

        <Card>
         <div className='form'>
         
            <h2>Restablecer Contraseña</h2>
            
            <form>
                <input 
                    type='email'
                    placeholder='correo@gmail.com'
                    required
                />
                <button className='btn btn-primary btn-block'>Restablecer Contraseña</button>
                
            </form>

            

            <span className='register'>
                <Link to={'/login'}>Iniciar sesión</Link>
                <Link to={'/registro'}>Registrarse</Link>
            </span>

            

         </div>
         </Card>
    </AuthContainer>
    );
}

export default Reset;
