import { useState, useEffect, useContext } from "react";

import { useNavigate } from "react-router-dom";
import axios from 'axios'

import { AppContext } from "../App.js";
import Budget from "../Budget.js";


export const Auth = (props) => {
    
    const [redirect, setRedirect] = useState(false);
    const { token, setToken } = useContext(AppContext);

    const navigate = useNavigate();

    useEffect(() => {
        console.log('auth token=>',token);
        const verify = async () => {
            try {
                const response = await axios.get('http://localhost:3001/api/token', {
                    headers: {
                        'x-access-token': token
                    }
                })
                console.log('auth=> ',response.data.token)
                setToken(response.data.token)
                setRedirect(true);
            } catch (e) {
                console.log(e.response);
                setToken(null);
                // navigate('/login');
            }
        }
        verify()
    }, [token])

    return (
        redirect ? <Budget />: null
    )
}