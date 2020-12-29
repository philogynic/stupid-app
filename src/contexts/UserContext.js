import React, {useState, useEffect, createContext} from 'react'
import firebase from 'firebase/app';
import 'firebase/firestore';

export const UserContext = createContext()


const UserContextProvider = (props) => {
    const [users, setUsers] = useState([])

    const db = firebase.firestore()

    useEffect(() => {
        db.collection('users').onSnapshot((snapshot) => {
            const db_users = snapshot.docs.map((doc) => {
                return doc.data()
            })
            setUsers(db_users)
        })

    }, [db])

    return (
        <UserContext.Provider value={{users}}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserContextProvider