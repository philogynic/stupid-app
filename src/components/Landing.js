import React, {useContext} from 'react'
import {Redirect, Link} from 'react-router-dom'
import {AuthContext} from '../contexts/AuthContext'

const Landing = () => {
    const {user} = useContext(AuthContext)
    if (user) return <Redirect to='/loggedin' /> 
    return (
        <section className='section'>
            <div className='container has-text-centered' style={{maxWidth:'350px'}}>
                <p>Welcome to</p>
                <h1 className='is-size-1'>Stupid Bank</h1>
                <p>Bank bego tempat kamu nyimpen duit yang udah ga kepake, siapa tau nanti butuh bisa diambil lagi...</p>
                <div className='has-text-centered'>
                        <button className='button'><Link to='/daftar'>JOIN NOW</Link></button>
                    </div>
                <p>sudah punya akun? <Link to='/login'>Login</Link> aja!</p>
            </div>
        </section>
    )
}

export default Landing