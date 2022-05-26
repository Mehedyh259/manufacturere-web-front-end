import axios from "axios";
import { useEffect, useState } from "react";


const useAdmin = (user) => {
    const [role, setRole] = useState('user');
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        const getAdmin = async () => {
            let email = user?.email;
            if (email) {
                const { data } = await axios.get(`https://manufacture-web-1542.herokuapp.com/user/${email}`, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                if (data.role) {
                    setRole(data.role);
                    setIsLoading(false);
                }
                setIsLoading(false)
            }
        }
        getAdmin();
    }, [user]);
    return [role, isLoading];
};

export default useAdmin;