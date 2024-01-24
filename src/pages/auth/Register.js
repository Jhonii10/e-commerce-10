import React, { useState } from 'react';
import { AuthContainer } from './styles/AuthContainer';
import { Card, Loader } from '../../components';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/config';


const Register = () => {
 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();

    const registerUser = async (event)=>{

            event.preventDefault();

            if (password.length < 6 ) {
                toast.error('La contraseña debe tener mas de 6 caracteres')
                return
            }

            if (password !== confirmPassword) {
                toast.error('Las contraseñas no coinciden')
                return
            }

            setIsLoading(true)

            await createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setIsLoading(false)
                toast.success(`Usuario ${user} creado`)
                navigate('/login')
            })
            .catch((error) => {

                const errorCode = error.code;

                setIsLoading(false)

                switch (errorCode) {
                    
                    case 'auth/email-already-in-use':
                        toast.error('El correo electrónico ya está en uso.')
                        break;
                    case 'auth/invalid-email':
                        toast.error('Correo electronico invalido')
                        break;
                
                    default:
                        toast.error(errorCode);
                        break;
                }


                
            });
            
    }

    return (
        <>
        {
            isLoading && <Loader /> 
        }

        <ToastContainer />

        <AuthContainer className='container'>
            
            <Card>
             <div className='form'>
             
                <h2>Registrarse</h2>
                
                <form onSubmit={registerUser}>
                    <input 
                        type='email'
                        placeholder='Correo@gmail.com'
                        required
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                    />

                    <input 
                        type='password'
                        placeholder='Contraseña'
                        required
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                    />

                   <input 
                        type='password'
                        placeholder='Confirmar contraseña'
                        required
                        value={confirmPassword}
                        onChange={(e)=>setConfirmPassword(e.target.value)}
                    />
                    <button 
                        className='btn btn-primary btn-block'
                        type='submit'
                    >
                        Acceder
                    </button>
                    
                </form>

                

                <span className='register'>
                    <p>
                        Ya tienes cuenta ?
                    </p>
                    <Link to={'/login'}>Iniciar sesión</Link>
                </span>

                

             </div>
             </Card>
             <div className='img'>   
                 <img src='assets/register.svg' alt='registro' width={400}/>
            </div>
        </AuthContainer>
        </>
    );
}

export default Register;
