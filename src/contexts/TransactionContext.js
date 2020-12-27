import React, {useState, createContext} from 'react'


export const TransactionContext = createContext()


const TransactionContextProvider = (props) => {
    const [transactions, setTransactions] = useState(
        [
            {transaction_id: 1, user_id: 1, type: 'topup', amount: 275000, transaction_timestamp: Date.now()},
            {transaction_id: 2, user_id: 2, type: 'tarik', amount: 10000, transaction_timestamp: Date.now()},
        ]
    )

    return (
        <TransactionContext.Provider value={{transactions}}>
            {props.children}
        </TransactionContext.Provider>
    )
}

export default TransactionContextProvider