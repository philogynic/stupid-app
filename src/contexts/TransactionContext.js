import React, {useState, createContext, useEffect} from 'react'
import firebase from 'firebase/app'
import 'firebase/firestore'

export const TransactionContext = createContext()


const TransactionContextProvider = (props) => {
    const [transactions, setTransactions] = useState(
        [
            {transaction_id: 1, user_id: 1, type: 'topup', amount: 275000, transaction_timestamp: Date.now()},
            {transaction_id: 2, user_id: 2, type: 'tarik', amount: 10000, transaction_timestamp: Date.now()},
        ]
    )

    const db = firebase.firestore()
    
    useEffect(() => {
        db.collection('transactions').onSnapshot((snapshot) => {
            setTransactions(snapshot.docs.map(doc => {
                return doc.data()
            }))
        })
        
    }, [db])

    const createTransaction = (transaction, user) => {
        db.collection('transactions').add({
            ...transaction,
            user_id: user.uid,
            createdAt: new Date()
        })
    }


    return (
        <TransactionContext.Provider value={{transactions, createTransaction}}>
            {props.children}
        </TransactionContext.Provider>
    )
}

export default TransactionContextProvider