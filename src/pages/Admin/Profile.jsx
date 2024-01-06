import {useContext} from "react";
import {UserContext} from "../../context/userContext";
import Dashboard from "./Dashboard.jsx";

const Profile = () => {
    const {user} = useContext(UserContext);

    return (
        <>
            <main className="flex-shrink-0">
                <div className="container">
                    <h1 className="mt-5">{!!user && user.firstName}'s Profile</h1>
                </div>
            </main>
        </>
    )
}

export default Profile;