import React, {useEffect} from 'react'
import { useHistory } from 'react-router'
import axios from 'axios'

const Logout = () => {
    
    const history = useHistory()

    const callLogout = async () => {

        try {
        
            const result = await axios.get('/logout')
           // history.push('/login')
            if (result.status === 201) {
                
                history.push('/login')
            }
        }
        catch (err) {
            
            console.log(err)
        }
    }

    useEffect(() => {
        callLogout()
    }, [])
    
    return (
        <div>
            Bye
        </div>
    )
}

export default Logout
