import {useContext} from "react";
import {UserContext} from "../../context/userContext.jsx";
import {Breadcrumbs} from "@material-tailwind/react";
import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import axios from "axios";

const Profile = () => {
    const {user} = useContext(UserContext);

    const verifyEmail = (email) => {
        // send email request to server
        axios.post('/password/reset', {email})
            .then(res => console.log(res.data))
            .catch(err => console.log(err));
    }
    return (
        <>

                <p>FirstName: {!!user && user.firstName}</p>
                <p>LastName: {!!user && user.lastName}</p>
                <p>Email: {!!user && user.email}</p>
                <p>isValid: {!!user && user.isValid ? 'Account verified' : 'Not verified'}</p>

                {!!user && user.isValid ? '' : (
                    <Button onClick={() => verifyEmail(user.email)}>Verify Email Address</Button>
                )}
        </>
    )
}

export default Profile;