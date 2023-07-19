import { useState } from 'react'


const Register = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('')
    return (
        <div className='bg-blue-50 h-screen flex items-center'>
            <form className=' w-64 mx-auto bg-blue-100 rounded-md p-4'>
                <h1>{userName + " " + password}</h1>
                <input
                    className='block w-full rounded-md focus:outline-none focus:ring focus:ring-blue-300 p-2 mb-3 border-blue-300 border-1'
                    type="text"
                    value={userName}
                    name="username"
                    placeholder='Username'
                    id="username"
                    onChange={(e) => setUserName(e.target.value)}
                />
                <input
                    className='block w-full rounded-md focus:outline-none focus:ring focus:ring-blue-300 p-2 mb-3 border-blue-300 border-1'
                    type="password"
                    value={password}
                    name="password"
                    placeholder='Password'
                    id="password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className='w-full bg-blue-500 block p-2 text-white rounded-sm'>Register</button>
            </form>

        </div>
    )
}

export default Register