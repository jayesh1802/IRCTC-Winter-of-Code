import { useState } from "react";
import './NewUser.css'
import { useNavigate } from "react-router-dom";
// import { useHistory } from "react-router-dom";

const NewUser = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [emailAdd,setEmailAdd]=useState('');
    const [contactNo,setContactNo]=useState('');
    const [newPassword,setNewPassword]=useState('');
    const [confirmPassword, setConfirmPassword]=useState('');
    const navigate=useNavigate('');
    const handleSubmit=(event)=>{
        event.preventDefault();
        if(newPassword!=confirmPassword)
        {
            alert("Password Do not Match!");
            return;
        }
        navigate('/');
        // history.push('/');
    }
    return (
        <div className="new-user">
            <div>
                <div className="newuser-page-heading">
                    <img src="../Images/IRCTC-Logo.png"></img>
                    <h1>Welcome to IRCTC</h1>
                </div>
                <div className="newUser-form">
                    <form onSubmit={handleSubmit}>
                        <div className="form-name">
                            <div className="form-firstName">
                            <label>First Name</label>
                            <input
                                type="text"
                                value={firstName}
                                onChange={event => setFirstName(event.target.value)}
                                required
                            />
                            </div>
                            <div className="form-lastName">
                            <label>Last Name</label>
                            <input
                                type="text"
                                value={lastName}
                                onChange={event => setLastName(event.target.value)}
                            />
                            </div>
                            
                        </div>
                        <div className="newUser-email">
                            <label>Email Address</label>
                            <input
                                type="email"
                                value={emailAdd}
                                onChange={event=> setEmailAdd(event.target.value)}
                                required
                            />
                        </div>
                        <div className="newUser-mobile">
                            <label>Mobile Number</label>
                            <input
                                type="text"
                                pattern ="[0-9]*"
                                maxLength={10}
                                value={contactNo}
                                required
                                onChange={event=>setContactNo(event.target.value)}
                            />
                        </div>
                        <div className="password">
                            <label>New Password</label>
                            <input
                                type="password"
                                value={newPassword}
                                required
                                onChange={event=>setNewPassword(event.target.value)}
                            />
                            <label>Confirm Password</label>
                            <input
                                type="password"
                                value ={confirmPassword}
                                required
                                onChange={event=>setConfirmPassword(event.target.value)}
                            />
                             <button type="submit" >Register </button>
                        </div>
        
                    </form>

                </div>
            </div>

        </div>
    )
}
export default NewUser;