import React, {useState, createContext} from 'react'


export const UserContext = createContext()


const UserContextProvider = (props) => {
    const [users, setUsers] = useState(
        [
            {user_id: 1, user_name: 'chbimo', total_balance: 275000, last_transaction_timestamp: Date.now()},
            {user_id: 2, user_name: 'diana', total_balance: 27500, last_transaction_timestamp: Date.now()}
        ]
    )

    return (
        <UserContext.Provider value={{users}}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserContextProvider