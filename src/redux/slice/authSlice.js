import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLoggedIn: false,
    email:null,
    userName:null,
    userID:null,

}


export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    SET_ACTIVE_USER:(state, action) => {
        const {email , userName , userID} = action.payload;
        state.isLoggedIn = true;
        state.email= email;
        state.userName = userName;
        state.userID = userID;
        localStorage.setItem('auth', JSON.stringify(state));
    },
    REMOVE_ACTIVE_USER:(state) => {
        state.isLoggedIn = false;
        state.email= null;
        state.userName = null;
        state.userID = null;
        localStorage.removeItem('auth');
    }
  }
})

// Action creators are generated for each case reducer function
export const { SET_ACTIVE_USER , REMOVE_ACTIVE_USER } = authSlice.actions;