import React, { useState } from 'react';
import swal from 'sweetalert';


import './login.css'

const Login = () => {

    async function loginUser(credentials) {
        return fetch('https://www.mecallapi.com/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        })
            .then(data => data.json())
    }


    // const classes = useStyles();
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const response = await loginUser({
            username,
            password
        });
        if ('accessToken' in response) {
            swal("Success", response.message, "success", {
                buttons: false,
                timer: 2000,
            })
                .then((value) => {
                    localStorage.setItem('accessToken', response['accessToken']);
                    localStorage.setItem('user', JSON.stringify(response['user']));
                    window.location.href = "/dashboard";
                });
        } else {
            swal("Failed", response.message, "error");
        }
    }
    return (
        <div className='login'>
            <div className='lc'>
                <h1 className="masuk">Masuk</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Email" name="user_name"
                        onChange={e => setUserName(e.target.value)} />
                    <div className='wrapper'>
                        <input type="text" placeholder="Password" name="user_name"
                            onChange={e => setPassword(e.target.value)} />
                        <span className='span'>Show</span>
                    </div>
                    <p className="lp" >lupa password?</p>
                    <button className='btn'>MASUK</button>
                </form>
                <p id='p'> Belum punya akun?
                    <a href="www"> Daftar Sekarang</a>
                </p>
            </div>
        </div >
    )
}

export default Login;