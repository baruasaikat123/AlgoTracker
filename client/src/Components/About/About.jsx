import react, { useState, useEffect } from 'react'
import {useHistory} from 'react-router-dom'

const About = () => {
    
    const history = useHistory()
    const [userData, setuserData] = useState()
    const callAbout = async () => {
        try {
            const res = await fetch('/dash', {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            })

          
            if (res.status === 200) {
                const data = await res.json()
                console.log(data)
                setuserData(data)
            }
            else {
                history.push('/login')
            }
            
        }
        catch (err) {
            console.log(err)
            history.push('/login')
        }
    }
    useEffect(() => {
        callAbout()
    }, [])
    return (
        <div>
            <h1>{`Welcome ${userData}`}</h1>
            
        </div>
    )
}

export default About
