import React from 'react';

const Dashboard = props => {
    return (
        <div>
            <div>
                <h1 class="text-success">Dashboard</h1>
                <h1 class="text-success">Status: {props.loggedInStatus}</h1>
            </div>
        </div>
    );
};
export default Dashboard;