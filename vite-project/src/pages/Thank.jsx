import React from 'react'

const Thank = () => {
   
    const handleThank = () => {
        window.location = "https://cosmofeed.com/signin"
    }
   
    return (
        <>
            <p>Hello Mohan</p>
            <button onClick={handleThank}>Thank You</button>
        </>
    )
}

export default Thank