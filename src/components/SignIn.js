import React, {useContext, useState} from 'react'
import {Redirect, Link} from 'react-router-dom'
import {AuthContext} from '../contexts/AuthContext'

const SignIn = () => {
    const {user, signInWithGoogle, signIn} = useContext(AuthContext)
    const [credentials, setCredentials] = useState(
        {
            email: '',
            password: '',
        }
    )
    const handleChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.id]: e.target.value
        })

        
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(credentials)
        signIn(credentials)
    }
    if (user) return <Redirect to='/loggedin' /> 
    return (
        <div className='section'>
            <div className='container' style={{maxWidth:'400px'}}>
            <h1 className='is-size-3'>Login</h1>
                <form className='box' onSubmit={handleSubmit}>
                    <div className='field'>
                        <label className='label'>email</label>
                        <div className='control'>
                            <input className='input' type='text' id='email' placeholder='chbimo' onChange={handleChange}/>
                        </div>
                    </div>
                    
                    <div className='field'>
                        <label className='label'>password</label>
                        <div className='control'>
                            <input className='input' type='password' id='password' placeholder='password' onChange={handleChange}/>
                        </div>
                    </div>
                    
                    <div className='has-text-centered'>
                        <button className='button'>LOGIN</button>
                    </div>
                </form>
                <p className='has-text-centered'>atau</p>
                <div className='has-text-centered'>
                    <button className='button' onClick={signInWithGoogle}>Login pake Google</button>
                </div>
                <p className='has-text-centered'>belum punya akun? <Link to='/daftar'>Daftar</Link> dulu aja!</p>

            </div>
        </div>
    

    )
}

export default SignIn