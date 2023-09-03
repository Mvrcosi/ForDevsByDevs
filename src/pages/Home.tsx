import React from 'react';
import MainSection from '../layouts/section/MainSection';
import Sidebar from '../layouts/nav/Sidebar';
import Aside from '../layouts/aside/Aside';

type HomeProps = {
    
};

const Home:React.FC<HomeProps> = () => {
    
    return (
        <div className='container h-screen mx-auto flex justify-between'>
            <Sidebar />
            <MainSection />
            <Aside />
        </div>
    )
}
export default Home;