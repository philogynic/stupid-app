import React, {useContext} from 'react'
import { TransactionContext } from '../contexts/TransactionContext'


const TransactionDashboard = () => {
    const {transactions} = useContext(TransactionContext)
    return (
        <section className='section'>
            <div className='container'>
                <p>Transaction Dashboard</p>
                <p>List of recent transactions:</p>

                {transactions.map(transaction => {
                    return (
                        <p>{transaction.user_id}</p>
                    )
                })}
                
            </div>
        </section>
    )
}

export default TransactionDashboard