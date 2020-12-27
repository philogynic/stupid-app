import React, {useContext} from 'react'
import {AuthContext} from '../contexts/AuthContext'
import {Redirect} from 'react-router-dom'

const LoggedIn = () => {
    const {user, logOut} = useContext(AuthContext)
    if (!user) return <Redirect to='/login' /> 
    return (
        <section className='section'>
            <div className='container has-text-centered' style={{maxWidth:'350px'}}>
                <h1 className='is-size-3'>Selamat Datang</h1>
                {user? user.uid : null}
                <div className='has-text-centered'>
                    <button className='button' onClick={logOut}>Logout</button>
                </div>
            </div>
        </section>
    )
}

export default LoggedIn