
import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firsebase.config';


 export const AuthContext = createContext (null);
 const auth = getAuth(app);
 const googleAuthProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading , setLoading] = useState(true);

    const createUser = (email, password) =>{

        return createUserWithEmailAndPassword (auth,email,password);


    }


    const signIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email,password)
    }

    const signInWithGoogle = () =>{
        return signInWithPopup (auth,googleAuthProvider )
    }



    const logOut = () =>{
       return signOut (auth);
    }





// observe auth state change--------
useEffect(() =>{

  const unsubcribe =  onAuthStateChanged(auth, currentUser =>{
    console.log ('auth state change', currentUser);
    setUser(currentUser);
    setLoading(false)
});

    return () => {
        unsubcribe();
    }

}, [])
  
   
    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        signInWithGoogle
    }


    return (
        <div>
            <AuthContext.Provider value = {authInfo}>
                {children}

            </AuthContext.Provider>
            
        </div>
    );
};

export default AuthProvider;