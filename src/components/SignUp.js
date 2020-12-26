import React, {useContext, useState} from 'react'
import {Redirect, Link} from 'react-router-dom'
import {AuthContext} from '../contexts/AuthContext'

const SignUp = () => {
    const {user, signInWithGoogle, signUp} = useContext(AuthContext)
    

    const [newUser, setNewUser] = useState(
        {
            email: '',
            password: '',
            username: ''
        }
    )
    
    const handleChange = (e) => {
        setNewUser({
            ...newUser,
            [e.target.id]: e.target.value
        })

        
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(newUser.email)
        signUp(newUser)
    }

    if (user) return <Redirect to='/loggedin' />

    return (
        <div className='section'>
            <div className='container' style={{maxWidth:'400px'}}>
                <h1 className='is-size-3'>Daftar akun baru</h1>
                <form onSubmit={handleSubmit}>
                    <div className='field'>
                        <label className='label'>username</label>
                        <div className='control'>
                            <input className='input' type='text' id='username' placeholder='chbimo' onChange={handleChange}/>
                        </div>
                    </div>
                    <div className='field'>
                        <label className='label'>email</label>
                        <div className='control'>
                            <input className='input' type='text' id='email' placeholder='christoforusbimo@gmail.com' onChange={handleChange}/>
                        </div>
                    </div>
                    <div className='field'>
                        <label className='label'>password</label>
                        <div className='control'>
                            <input className='input' type='password' id='password' placeholder='password' onChange={handleChange}/>
                        </div>
                    </div>
                    <div className='field'>
                        <label className='label'>ulangin Password</label>
                        <div className='control'>
                            <input className='input' type='password' placeholder='password'/>
                        </div>
                    </div>
                    <div className='has-text-centered'>
                        <button className='button'>DAFTARIN</button>
                    </div>
                </form>
                
                <p className='has-text-centered'>atau</p>
                <div className='has-text-centered'>
                    <button className='button' onClick={signInWithGoogle}>Login pake Google</button>
                </div>
                <p className='has-text-centered'>sudah pernah daftar? <Link to='/login'>Login</Link> aja!</p>

            </div>
        </div>
        
    

    )
}

export default SignUp