import axios from "axios";
import { useEffect, useState } from "react";

const useAdmin = (user) => {
    const [role, setRole] = useState('user');
    useEffect(() => {
        const getAdmin = async () => {
            let email = user?.email;
            if (email) {
                const { data } = await axios.get(`http://localhost:5000/user/${email}`);
                if (data.role) {
                    setRole(data.role);
                }
            }
        }
        getAdmin();
    }, [user]);
    return [role];
};

export default useAdmin;