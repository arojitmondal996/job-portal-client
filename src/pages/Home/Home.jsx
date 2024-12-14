import React from 'react';
import Header from './Header';
import HotJobs from './HotJobs';
import HotJobCard from './HotJobCard';

const Home = () => {
    return (
        <div>
            <Header/>
            <HotJobs/>
            {/* <HotJobCard/> */}
        </div>
    );
};

export default Home;