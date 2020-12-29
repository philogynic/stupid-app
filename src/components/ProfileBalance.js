import React, {useState, useEffect, useContext} from 'react'
import { AuthContext } from '../contexts/AuthContext'
import firebase from 'firebase/app'
import 'firebase/firestore'


const ProfileBalance = () => {
    const {user} = useContext(AuthContext)
    const [transactions, setTransactions] = useState([])

    const db = firebase.firestore()

    useEffect(() => {
        const uid = user.uid ? user.uid : null
        db.collection('transactions').where('user_id', '==',  uid).onSnapshot((snapshot) => {
            setTransactions(snapshot.docs.map(doc => {
                return doc
            }))
        })
        

    }, [db, user])


    transactions.forEach((transaction) => {
        console.log(transaction.id, transaction.data())
    })

    if (!user.uid) return <p>Loading</p>
    return (
        <section className='section'>
            <div className='container'>
                <p>Profile Balance {user.uid}</p>
                <p>Top up button</p>
                <p>Tarik button (with total balance)</p>
                <p>Table of transaction history sort the by the most recent</p>
                {transactions.map((transaction) => {
                    return <p key={transaction.id}>{transaction.data().amount}, {transaction.data().type}</p>
                })}
                
            </div>
        </section>
    )
}

export default ProfileBalance