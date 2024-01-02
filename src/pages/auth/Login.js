import {useContext, useEffect, useState} from "react";
import Button from "../../components/Button";
import {useNavigate} from "react-router-dom";
import Input from "../../components/Input";
import axios from "axios";
import {UserContext} from "../../context/userContext";
import toast from "react-hot-toast";

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const {user} = useContext(UserContext);

    useEffect(() => {
        if (user) navigate('/dashboard');
    }, []);

    const handleForm = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/login', {email, password})
                .then(res => {
                    const error = res.data.error;
                    if (error) {
                        toast.error(error);
                    } else {
                        toast.success("Logging user in!");
                        navigate('/dashboard');
                    }
                })
                .catch(err => console.log(err));
        } catch (e) {
            console.log(e);
        }

    }
    return (
        <>
            <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
                <div className="bg-white p-3 rounded w-25">
                    <h2>Login</h2>
                    <form onSubmit={handleForm}>

                        <Input
                            value={email}
                            label="Email"
                            type="text"
                            placeholder="Enter Email"
                            name="email"
                            className="form-control rounded-0"
                            onChange={e => {
                                setEmail(e.target.value)
                            }}
                        />

                        <Input
                            value={password}
                            label="Password"
                            type="password"
                            placeholder="Enter Password"
                            name="password"
                            className="form-control rounded-0"
                            onChange={e => {
                                setPassword(e.target.value)
                            }}
                        />
                        <Button text="Signup" color={'blue'}/>
                            <div className="row mt-5">
                                <div className="col-md-6">
                                    <p onClick={() => navigate('/register')}>Register</p>
                                </div>

                                <div className="col-md-6">
                                    <p onClick={() => navigate('/')}>homePage</p>
                                </div>
                            </div>
                    </form>
                </div>
            </div>
        </>
    );
}