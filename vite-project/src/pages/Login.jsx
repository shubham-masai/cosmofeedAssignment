import React, { useContext, useState } from 'react'
import { Navigate } from 'react-router-dom';
import { UserContext } from '../components/Provider';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    // const [rahul, setRahul] = useState(false);
    // const [mohan, setMohan] = useState(false);

    const [isLoggin, setIsLoggin] = useState(false);
    const { setName } = useContext(UserContext);
    const handleSubmit = (e) => {

        e.preventDefault();
        if (username === "Rahul" && password === "1234") {
            // setRahul(true)
            setName(username)
            setIsLoggin(true);
        }
        else if (username === "Mohan" && password === "1234") {
            // setMohan(true);
            setName(username);
            setIsLoggin(true);
        }
    }

    // if (rahul) {
    //     return <Navigate to={"/welcome"} />
    // }

    // if (mohan) {
    //     return <Navigate to={"/thank"} />
    // }


    if (isLoggin) {
        return <Navigate to={"/home"} />
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={username} onChange={(e) => { setUsername(e.target.value) }} placeholder='Enter Username' />
                <input type="text" value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder='Enter password' />
                <input type="submit" />
            </form>
        </div>
    )
}

export default Login