import React, { useState } from 'react';
import { AuthContainer } from './styles/AuthContainer';
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { Card, Loader } from '../../components';
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth } from '../../firebase/config';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';


const Login =  () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();
    const {previousUrl} = useSelector((state)=>state.cart)

    const redirectUser = ()=>{
        if (previousUrl.includes('cart')){
            return navigate('/cart')
        }else{
            return navigate('/')
        }
    }

    const loginUser =  (event)=>{
        event.preventDefault();

        setIsLoading(true)

         signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            
            // const user = userCredential.user;
            setIsLoading(false)
            toast.success('Inico de sesión exitoso')
            redirectUser()
        })
        .catch((error) => {
            const errorMessage = error.message;
            setIsLoading(false)
            toast.error(errorMessage)
            
        });
    }

    const loginUserWithGoogle = ()=>{

        const provider = new GoogleAuthProvider();

        signInWithPopup(auth, provider)
        .then((result) => {
            // const user = result.user;
            toast.success('Inico de sesión exitoso')
            redirectUser();
            
        }).catch((error) => {
            toast.error(error.message)
        });

    }

    return (
        <>
        {
            isLoading && <Loader /> 
        }

        <AuthContainer className='container'>
            <div className='img'>   
                 <img src='assets/login.svg' alt='login' width={400}/>
            </div>
    
            <Card>
             <div className='form'>
             
                <h2>Iniciar sesión</h2>
                
                <form onSubmit={loginUser}>
                    <input 
                        type='email'
                        placeholder='correo@gmail.com'
                        required
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                    />

                    <input 
                        type='password'
                        placeholder='contraseña'
                        required
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                    />
                    <button
                        type='submit'
                        className='btn btn-primary btn-block'
                        >
                        Acceder
                    </button>
                    <div className='links'>
                        <Link to={'/reset'}>Olvidates tu contraseña</Link>
                    </div>
                    <p>Iniciar sesión con</p>
                </form>

                <button className='btn btn-danger btn-block' onClick={loginUserWithGoogle}>
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
        </>
    );
}

export default Login;
