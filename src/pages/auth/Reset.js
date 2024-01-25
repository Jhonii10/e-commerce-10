import React, { useState } from 'react';
import { AuthContainer } from './styles/AuthContainer';
import { Card, Loader } from '../../components';
import { Link } from 'react-router-dom';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../../firebase/config';
import { toast } from 'react-toastify';

const Reset = () => {

    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);


    const resetPassword = (event)=>{
        event.preventDefault();
        setIsLoading(true)
        sendPasswordResetEmail(auth, email)
        .then(() => {
            // Password reset email sent!
            setIsLoading(false)
            toast.success('Se envio un correo a tu email para restablecer la contraseña')
        })
        .catch((error) => {
            const errorMessage = error.message;
            setIsLoading(false)
            toast.error(errorMessage)
        });

    }
    return (
        <>
        {
            isLoading && <Loader/>
        }
        <AuthContainer className='container'>
        <div className='img'>   
             <img src='assets/reset.svg' alt='login' width={400}/>
        </div>

        <Card>
         <div className='form'>
         
            <h2>Restablecer Contraseña</h2>
            
            <form onSubmit={resetPassword}>
                <input 
                    type='email'
                    placeholder='correo@gmail.com'
                    required
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                />
                <button
                    type='submit'
                    className='btn btn-primary btn-block'
                >
                    Restablecer Contraseña
                </button>
                
            </form>

            

            <span className='register'>
                <Link to={'/login'}>Iniciar sesión</Link>
                <Link to={'/registro'}>Registrarse</Link>
            </span>

            

         </div>
         </Card>
    </AuthContainer>
    </>
    );
}

export default Reset;
