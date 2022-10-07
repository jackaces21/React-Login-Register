import React from 'react'
import './register.css'

const Register = () => {
    return (
        <div className='register'>
            <div className='lr'>
                <h1 className="masuk">Daftar Sekarang</h1>
                <form action="">
                    <input type="text" placeholder="Nama Depan" name="user_nd" />
                    <input type="text" placeholder="Nama Belakang" name="user_nb" />
                    <input type="text" placeholder="Email" name="user_email" />
                    <button className='btn'>SELANJUTNYA</button>
                </form>
                <p id='p'> Sudah punya akun?
                    <a href="register.html"> Masuk</a>
                </p>
            </div>
        </div >
    )
}

export default Register