import React from 'react';
import Navbar from './Navbar';
import Banner from './Banner';

function Home() {

    // const particlesInit = async (main) => {
    //     console.log(main);

    //     await loadFull(main);
    // };

    // const particlesLoaded = (container) => {
    //     console.log(container);
    // };

    return (
        <>

            <Navbar />
            <Banner />
        </>
    )
}

export default Home;