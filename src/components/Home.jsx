import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const Home = () => {
    const {user} = useContext(AuthContext)
    console.log(user);
    return (
        <div>
            This is home {user && <span>{user.displayName}</span> }
        </div>
    );
};

export default Home;