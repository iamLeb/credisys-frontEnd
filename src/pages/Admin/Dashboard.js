import { useContext } from "react";
import {UserContext} from "../../context/userContext";
import {useNavigate} from "react-router-dom";
import axios from "axios";

const Dashboard = () => {
    const navigate = useNavigate();
    useContext(UserContext);

        return (
            <div className="header">
                <div style={{cursor: 'pointer'}} className="logo" onClick={() => navigate('/dashboard')}><h2>Credisys</h2></div>
                <div className="links">
                    <div className="link" onClick={() => navigate('/dashboard')}>Home</div>
                    <div className="link profile" onClick={() => navigate('/profile')}>My Profile</div>
                    <div className="link profile" onClick={() => {
                        axios.get('/api/logout')
                            .then(res => {
                                // eslint-disable-next-line no-restricted-globals
                                location.reload(true);
                            })
                            .catch(err => console.log(err));
                    }}>Logout</div>
                </div>
            </div>
        )
}

export default Dashboard;