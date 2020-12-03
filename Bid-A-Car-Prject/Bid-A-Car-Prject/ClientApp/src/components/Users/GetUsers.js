import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { button } from 'bootstrap';

function GetUsers(props) {
    const displayName = GetListings.name;

    // Configure our state, and our setState standin methods.
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    // Build the table based on forecast data.
    function renderUserTable(users) {
        return (


            <div>
                {users.map(user => {
                    return (
                        <div>

                            
                            <div><strong>Name:</strong> {user.name}</div>
                            <div><strong>PhoneNumber:</strong> {user.phoneNumber}</div>
                            <div><strong>StreetAddress</strong> {user.streetAddress}</div>
                            <div><strong>City: </strong>{user.city}</div>
                            <div><strong>Postal Code:</strong> {user.postalCode}</div>
                            < button class="btn btn-success" type="submit" value="Bid">Edit</button><br />
                            < button class="btn btn-success" type="submit" value="BaseBid">Delete</button>
                        </div>
                    );

                })}
            </div>
        );
    }



    // Grab our data from our API.
    async function populateUserData() {

        const response = await axios.get('VehicleAPI/AllUsers');
        setUsers(response.data);
        setLoading(false);
    }

    useEffect(() => {
        populateUserData();
    }, [loading]);

    let contents = loading
        ? <p><em>Loading...</em></p>
        : renderUserTable(users);

    return (

        <div>
            <h1 id="tabelLabel" >All Users</h1>
            <p>This component demonstrates fetching data from the server.</p>
            {contents}

            <button className="btn btn-primary" onClick={() => { setLoading(true) }}>Refresh</button>
        </div>
    );
}

export { GetUsers };