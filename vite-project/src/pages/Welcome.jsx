import React from 'react'

const Welcome = () => {

    const handleWelcome = () => {
        window.location = "https://cosmofeed.com/signin"
    }
    return (
        <>
            <p>Hiii Rahul</p>
            <button onClick={handleWelcome}>Welcome</button>
        </>
    )
}

export default Welcome