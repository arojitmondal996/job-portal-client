import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import AuthContext from './Authcontext';
import auth from '../firebase/firebase.init';
const googleProvider = new GoogleAuthProvider
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // create user in email
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // singin user er jonno email diye
    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    } 
    // sign in with google
    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }
    // signout user
    const signOutUser = () => {
        setLoading(true);
        return signOut(auth);
    }

    // 2nd user er information ta ekta state ea rakhte hobe
    // er jonno ekta observer banate hobe
    // auth object er modhe ekta observer banabo jate kore kono change hole seta dhore phelte pari
    // ei observer ta calu hobe first loading er somoy
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            // user jodi nao thake tahole null hisebe amra set korbo
            setUser(currentUser);
            console.log('state captured', currentUser);
            setLoading(false);
        })
        // unsubscribe use korci karon ami ekhan theke cole gele jate memory ta hold kore na rakhe eajonno
        return () => {
            unsubscribe();
        }
    }, [])
    const authInfo = {
        user,
        loading,
        createUser,
        signInUser,
        signOutUser,
        signInWithGoogle
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;