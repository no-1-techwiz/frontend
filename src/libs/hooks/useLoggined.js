import {useEffect, useState} from "react";

export const useLoggined = () => {
    const [loggined, setLoggined] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [user, setUser] = useState(null);

    const checkUser = async () => {
        try{
            setLoading(true)
            const accessToken = localStorage.getItem('accessToken');
            // const response = await fetch('http://localhost:8000/api/auth/me', {
            //     headers: {
            //         'Content-Type': 'application/json',
            //         'Authorization': `Bearer ${accessToken}`
            //     }
            // });
            if(accessToken) {
                setLoggined(true);
                const user = JSON.parse(localStorage.getItem("user") || '{}')
                console.log(user)
                setUser(user);
                // setUser(accessToken);
            } else {
                setLoggined(false);
                setUser(null);
            }
        }catch (e) {

        }finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        checkUser()
    }, []);

    return {user, loggined, loading, setUser}
}