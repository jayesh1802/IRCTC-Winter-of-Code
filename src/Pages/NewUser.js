import { useState } from "react";

const NewUser = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    return (
        <div className="new-user">
            <div>
                <div className="newuser-page-heading">
                    <img src="../Images/IRCTC-Logo.png"></img>
                    <h1>Welcome to IRCTC</h1>
                </div>
                <div className="newUser-form">
                    <form>
                        <div className="form-name">
                            <label>First Name</label>
                            <input
                                type="text"
                                value={firstName}
                                onChange={event => setFirstName(event.target.value)}
                                required
                            />
                            <label>Last Name</label>
                            <input
                                type="text"
                                value={lastName}
                                onChange={event => setLastName(event.target.value)}
                                required
                            />

                        </div>
                    </form>

                </div>
            </div>

        </div>
    )
}
export default NewUser;