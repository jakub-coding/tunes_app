import React, { useState } from 'react'
import logo from "../assets/logo.svg";




const Home: React.FC = () => {
    const [title] = useState('Iam Awesome!')
    const [count, setCount] = useState(0)

    return (
        <div className="flex justify-center items-center flex-col">
            <img onClick={() => {
                setCount(count + 1);
            }} src={logo} className="animate-pulse App-logo w-1/2 cursor-pointer" alt="logo"/>
            <h1 className={count > 1 ? "site-title-green" : count > 2 ? "site-title-red" : "site-title"}>
                {title}
            </h1>
            <h3 className="text-yellow-600 font-bold text-xl">number of Clicks: {count}</h3>
            <p className="text-gray-100 text-md">
                This is my 2nd React app and Iam very proud of that APP. <br />
                If you want to learn about React, please visit Official.
            </p>
            <a className="text-xl text-blue-500" target="_blank" rel="noreferrer" href="https://reactjs.org/"> Documentation</a>
        </div>
    )
}

export default Home