import Button from "../../components/Button";
import Input from "../../components/Input";
import {Link} from "react-router-dom";
import {useState} from "react";
import axios from "axios";
import toast from "react-hot-toast";
import {useNavigate} from "react-router-dom";

export default function TenantRegistration() {
    const navigate = useNavigate();
    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        passwordConfirm: ''
    });
    const onChange = e => {
        setValues({...values, [e.target.name]: e.target.value});
    }

    const inputs = [
        {
            id: 1,
            name: 'firstName',
            type: 'text',
            placeholder: 'enter first name',
            label: 'First Name',
            errorMessage: 'First name should be between 3-16 character',
            required: true,
            pattern: '^[A-Za-z0-9]{3,16}$'
        },
        {
            id: 2,
            name: 'lastName',
            type: 'text',
            placeholder: 'enter last name',
            label: 'Last Name',
            errorMessage: 'Last name should be between 3-15 character',
            required: true,
            pattern: '^[A-Za-z0-9]{3,16}$'
        },
        {
            id: 3,
            name: 'email',
            type: 'email',
            placeholder: 'enter email',
            label: 'E-mail',
            errorMessage: 'Email must be valid',
            required: true,
        },
        {
            id: 4,
            name: 'password',
            type: 'password',
            placeholder: 'enter password',
            label: 'Password',
            errorMessage: 'Password should be between 8-20 characters, include at least 1 letter, 1 Number, and 1 special case',
            required: true,
            // pattern: '^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$'
        },
        {
            id: 5,
            name: 'passwordConfirm',
            type: 'password',
            placeholder: 'enter password again',
            label: 'Password Confirm',
            errorMessage: 'Passwords don\'t match',
            required: true,
            pattern: values.password
        }
    ];
    const handleForm = e => {
        e.preventDefault();
        // check if email already exist
        axios.post('/api/tenant', values)
            .then(res => {
                console.log(res.data.error);
                if (res.data.error) {
                    toast.error(res.data.error);
                } else {
                    toast.success("Registration complete, logging in!");
                    navigate('/dashboard');
                }
            })
            .catch(err => console.log(err));
    }

    return (
        <>
            <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
                <div className="bg-white p-3 rounded w-25">
                    <h2>Tenant Registration</h2>
                    <form onSubmit={handleForm}>
                        <div className="row">
                            {inputs.map((input) => (
                                <Input key={input.id} {...input} value={values[input.name]} onChange={onChange}/>
                            ))}
                        </div>

                        <Button text="Signup" color={'blue'}/>
                        <p>Already have an account? <Link style={{textDecoration: "none"}} to={'/login'}>Login</Link></p>
                        <p><Link style={{ textDecoration: "none"}} to={'/'}>Go back to homePage</Link></p>
                    </form>
                </div>
            </div>
        </>
    );
}