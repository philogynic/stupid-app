import React, {useState, createContext, useEffect} from 'react'
import firebase from 'firebase/app';
import 'firebase/auth';

export const AuthContext = createContext()

const AuthContextProvider = (props) => {
    const auth = firebase.auth();
    const [user, setUser] = useState(auth);

    useEffect(() => {
        auth.onAuthStateChanged(setUser)
    }, [auth])

    const signInWithGoogle = () => {
        auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    }

    const signIn = (credentials) => {
        auth.signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        )
        .then(() => {
            console.log('berhasil')
        })
        .catch(() => {
            console.log('gagal')
        })
    }

    const signUp = (newUser) => {
        auth.createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        )
        .then(() => {
            console.log('berhasil')
        })
        .catch(() => {
            console.log('gagal')
        })
    }

    const logOut = () => {
        auth.signOut()
    }
    return (
        <AuthContext.Provider value={{user, signInWithGoogle, logOut, signUp, signIn}}>
            {props.children}
        </AuthContext.Provider>
    )

}

export default AuthContextProvider