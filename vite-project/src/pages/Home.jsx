import React, { useContext, useState } from 'react'
import { UserContext } from '../components/Provider';

const Home = () => {
    const { Name } = useContext(UserContext);

    const hanldeClick = () => {
        window.location = "https://cosmofeed.com/signin"
    }
    return (
        <div>
            {
                Name === "Rahul" && <>
                    <p>Hello Rahul</p>
                    <button onClick={hanldeClick}>Welcome</button>
                </>
            }

            {
                Name === "Mohan" &&
                <>
                    <p>Hello Mohan</p>
                    <button onClick={hanldeClick}>Thank You</button>
                </>
            }
        </div >
    )
}

export default Home