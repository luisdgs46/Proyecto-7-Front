import { useState, useEffect, useContext } from 'react'
import UserContext from '../../contexts/users/UserContext'

export default function Login(props) {

    const userCtx = useContext(UserContext)

    const { 
        loginUser,
        authStatus,
        verifyingToken
    } = userCtx

    const [data, setData] = useState({
        email: "",
        password: ""
    })


    useEffect(() => {
        verifyingToken()

        if(authStatus){
            props.history.push("/perfil")
        }

    }, [authStatus])

    if(authStatus) return null   


    const handleChange = (event) => {

        setData({
            ...data,
            [event.target.name]: event.target.value
        })

    }

    const sendData = (event) => {
        
        event.preventDefault()
        loginUser(data)

    }


    return (
        <>
            <div>
                <div>
                    <div>
                        <h2>
                            Iniciar sesión
                        </h2>
                    </div>
                    <form onSubmit={(e) => { sendData(e) }}>
                        <input type="hidden" name="remember" value="true" />
                        <div>
                            <div>
                                <label htmlFor="email-address">Tu correo</label>
                                <input 
                                id="email-address" 
                                onChange={(e) => { handleChange(e) }}
                                name="email" type="email" autoComplete="email" required placeholder="Tu correo" />
                            </div>
                            <div>
                                <label htmlFor="password">Password</label>
                                
                                <input id="password" 
                                name="password" 
                                onChange={(e) => { handleChange(e) }}
                                type="password" autoComplete="current-password" 
                                required 
                                placeholder="Password" />
                            </div>
                        </div>


                        <div>
                            <button type="submit">
                                Comenzar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

