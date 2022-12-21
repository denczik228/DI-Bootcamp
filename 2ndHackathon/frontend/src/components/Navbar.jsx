import React from 'react'
import '../App.css'
import { Link, Navigate } from 'react-router-dom'
import axios from "axios"

const Navbar = () => {
    const logout = async () => {
        try {
            const responce = await axios.delete('/logout')
            if (responce.status === 200 || responce.status === 204) {

                Navigate('/Login')
            }
        } catch (e) {
            Navigate('/Login')
        }
    }

    return (
        <div className='mynavbar'>
            <div className='logo'><img src='/images/LD1.png' /></div>
            <ul className='links'>
                <Link className='link' to='/'>
                    <li>Home</li>
                </Link>
                <Link className='link' to='/Login'>
                    <li>Log In</li>
                </Link>
                <Link className='link' to='/Register'>
                    <li>Register Form</li>
                </Link>
                <Link className='link' onClick={logout}>
                    <li>Log Out</li>
                </Link>
            </ul>
        </div>
    )
}

export default Navbar