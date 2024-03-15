import { Avatar, Box, Divider, IconButton, MenuItem, Popover, Stack, Typography, alpha } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { REMOVE_ACTIVE_USER, SET_ACTIVE_USER } from '../../redux/slice/authSlice';
import AdminOnlyRoute from '../adminOnlyRoute/AdminOnlyRoute';
import { useNavigate } from 'react-router-dom';
import { ShowOnLogIn } from '../hiddenLink/HiddenLink';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../../firebase/config';
import { toast } from 'react-toastify';

const Account = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch()

    const [open, setOpen] = useState(null);

    const {userName , email } = useSelector(state => state.auth)
    const [displayName, setDisplayName] = useState('');

    useEffect(() => {

        onAuthStateChanged(auth, (user) => {
            if (user) {
              const {displayName, email , uid} = user;

              const setName = (name)=> name.split('@')[0].replace(/^\w/, c => c.toUpperCase());

              setDisplayName(() => displayName ? setName(displayName) : setName(email))
              
              dispatch(SET_ACTIVE_USER({
                email: email,
                userName: displayName ? setName(displayName) : setName(email),
                userID: uid
              }))
            } else {
                dispatch(REMOVE_ACTIVE_USER()) 
                setDisplayName('')
                
            }
          });
          
        
    }, [dispatch , displayName]);
    
    const logoutUser = ()=>{
        signOut(auth).then(() => {
              toast.success('Cerrando secion')
              navigate('/');
          }).catch((error) => {
              toast.error('ocurrio un problema')
          });
    }
    
    const handleOpen = (event) => {
        setOpen(event.currentTarget);
      };
    
      const handleClose = () => {
        setOpen(null);
      };



    return (
        <>
           <IconButton
           onClick={handleOpen}
           sx={{
            
           }}
            
            >
                <Avatar 
                    sx={{ height:30, width:30,
                        ...(open && {
            '&:before': {
              zIndex: 0,
              content: "''",
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              position: 'absolute',
              bgcolor: (theme) => alpha(theme.palette.grey[600], 0.8),
            },
          })
                    }} 
                    alt="Cindy Baker" 
                    src="https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_2.jpg"
                />
            </IconButton> 

            <Popover
            open={Boolean(open)}
            anchorEl={open}
            onClose={handleClose}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            PaperProps={{
            sx: {
                p: 0,
                mt: 1.5,
                ml: 0.75,
                width: 180,
                overflow:'inherit',
                backdropFilter:'blur(20px)',
                backgroundColor:'rgba(255, 255, 255, 0.75)',
                '& .MuiMenuItem-root': {
                typography: 'body2',
                borderRadius: 0.75,
                },
            },
            }}
            >
            <Typography variant='span' 
                sx={{
                    width:14,
                    height:14,
                    position:'absolute',
                    backdropFilter:'blur(20px)',
                    backgroundColor:'rgba(255, 255, 255, 0.75)',
                    clipPath:'polygon(0% 0%, 100% 100%, 0% 100%)',
                    border:'1px solid rgba(145, 158, 171, 0.12)',
                    top:-6.5,
                    transform:'rotate(135deg)',
                    right:20,
                }}
            />
            <Box sx={{ my: 1.5, px: 2.5 , }} >

          <Typography variant="subtitle2" noWrap>
            {userName}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
            {email}
          </Typography>
        </Box>
        <Divider sx={{ borderStyle: 'dashed' }} />

        

        <Stack sx={{ p: 1 , '& *':{fontFamily:'Quicksand'} }}>
            <AdminOnlyRoute>
                <MenuItem  onClick={()=>{handleClose(); navigate('/admin') }} sx={{fontFamily:'Quicksand', '& span':{fontFamily:'Quicksand'}}}> 
                    <Typography variant='span'>                              
                    Administrador
                    </Typography>
                </MenuItem>
            </AdminOnlyRoute>

            <MenuItem   onClick={()=>{handleClose(); navigate('/order-history') }} sx={{fontFamily:'Quicksand', '& span':{fontFamily:'Quicksand'}}}>
            <ShowOnLogIn>
                <Typography variant='span'>
                     Mis Pedidos
                </Typography>
                
            </ShowOnLogIn>
            </MenuItem>

        </Stack>

        <Divider sx={{ borderStyle: 'dashed' }} />

        <MenuItem  sx={{ m: 1}}  onClick={logoutUser} >
        <ShowOnLogIn>
            <Typography variant='span'  sx={{  color:'red', fontWeight:500}} >
              Cerrar sesión
            </Typography>
        </ShowOnLogIn>     
        </MenuItem>
            </Popover>
        </>
    );
}

export default Account;
