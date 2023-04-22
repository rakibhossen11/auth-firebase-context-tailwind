import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const Home = () => {
    const {} = useContext(AuthContext)
    return (
        <div>
            This is home
        </div>
    );
};

export default Home;