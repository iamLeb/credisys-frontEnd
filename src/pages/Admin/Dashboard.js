import { useContext } from "react";
import {UserContext} from "../../context/userContext";
import {useNavigate} from "react-router-dom";

const Dashboard = () => {
    const navigate = useNavigate();
    const {user} = useContext(UserContext);

    console.log(user);
        return (
            <div className="header">
                <div style={{cursor: 'pointer'}} className="logo" onClick={() => navigate('/dashboard')}><h2>Credisys</h2></div>
                <div className="links">
                    <div className="link" onClick={() => navigate('/dashboard')}>Home</div>
                    <div className="link profile" onClick={() => navigate('/profile')}>My Profile</div>
                    <div className="link profile"></div>

                </div>
            </div>
        )
}

export default Dashboard;