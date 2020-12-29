import React, {useContext, useState} from 'react'
import { AuthContext } from '../contexts/AuthContext'
import { TransactionContext } from '../contexts/TransactionContext'


const TopUp = () => {
    const {user} = useContext(AuthContext)
    const {createTransaction} =  useContext(TransactionContext)
    const [transaction, setTransaction] = useState(
        {
            type: 'topup',
            amount: '',
        }
    )

    const handleChange = (e) => {
        setTransaction({
            ...transaction,
            [e.target.id]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(transaction)
        createTransaction(transaction, user)
        
    }
    if (!user.uid) return <p>Loading</p>
    return (
        <div className='section'>
            <div className='container' style={{maxWidth:'400px'}}>
            
                <form className='box' onSubmit={handleSubmit}>
                    <div className='field'>
                        <label className='label'>jumlah top up: </label>
                        <div className='control'>
                            <input className='input' type='number' id='amount' placeholder='10000' onChange={handleChange}/>
                        </div>
                    </div>
                    
                    
                    <div className='has-text-centered'>
                        <button className='button'>via GOPAY</button>
                    </div>
                </form>
                
                

            </div>
        </div>
    

    )
}

export default TopUp