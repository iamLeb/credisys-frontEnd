import axios from "axios";
import { createContext, useState, useEffect } from "react";
import {useNavigate} from "react-router-dom";

export const UserContext = createContext({});

export const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUser = async () => {
            if (!user) {
                await axios.get("/profile").then(({ data }) => {
                    if (data) {
                        setUser(data)
                    }
                });
            }
        };
        fetchUser();
    }, []);
    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};
