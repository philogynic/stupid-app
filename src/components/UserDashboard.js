import React, {useContext} from 'react'
import { UserContext } from '../contexts/UserContext'


const UserDashboard = () => {
    const {users} = useContext(UserContext)
    return (
        <section className='section'>
            <div className='container'>
                <p>User Dashboard</p>
                <p>List of users:</p>

                {users.map(user => {
                    return (
                        <p>{user.user_name}</p>
                    )
                })}
                
            </div>
        </section>
    )
}

export default UserDashboard