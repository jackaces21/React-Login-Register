import React from 'react'
import './register2.css'
import img from '../../img/arrow-left.svg'

const Register2 = () => {
    return (
        <div className='login'>
            <div className='lr2'>
                <h1 className="kembali"><img src={img} alt="" />Kembali</h1>
                <form action="">
                    <input type="text" placeholder="Nomor Telepon" name="user_name" />
                    <div className='wrapper'>
                        <input type="text" placeholder="Password" name="user_name" />
                        <span className='span'>Show</span>
                    </div>
                    <div className='wrapper'>
                        <input type="text" placeholder="Konfirmasi Password" name="user_name" />
                        <span className='span'>Show</span>
                    </div>
                    <button className='btn'>SELANJUTNYA</button>
                </form>
                <p id='p'> Sudah punya akun?
                    <a href="register.html"> Masuk</a>
                </p>
            </div>
        </div >
    )
}

export default Register2