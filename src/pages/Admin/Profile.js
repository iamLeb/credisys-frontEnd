import {useContext} from "react";
import {UserContext} from "../../context/userContext";
import Dashboard from "./Dashboard";

const Profile = () => {
    const {user} = useContext(UserContext);

    return (
        <>
            <Dashboard />
            <div className="container">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title text-center">Profile</h5>
                        <hr/>
                        <div className="row">
                            <div className="col-md-4">
                                <label htmlFor="firstname">First Name</label>
                                <input className='form-control' type="text" value={!!user && user.firstName}/>
                            </div>

                            <div className="col-md-4">
                                <label htmlFor="lastname">Last Name</label>
                                <input className='form-control' type="text" value={!!user && user.lastName} />
                            </div>

                            <div className="col-md-4">
                                <label htmlFor="email">E-mail</label>
                                <input className='form-control' type="text" value={!!user && user.email} />
                            </div>
                            <div className="col-md-12">
                                <button className='btn btn-check'>Update Data</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile;