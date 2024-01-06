import { useContext } from "react";
import {UserContext} from "../../context/userContext";

const Dashboard = () => {
    const {user} = useContext(UserContext);

    return (
        <>
            <main className="flex-shrink-0">
                <div className="container">
                    <h1 className="mt-5">Hello {!!user && user.firstName}, Welcome to your dashboard</h1>
                </div>
            </main>
        </>
    )
}

export default Dashboard;