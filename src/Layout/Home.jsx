import React from 'react';
import Banner from '../Component/Banner/Banner';
import Gallery from '../Component/Gallery/Gallery';
import Category from '../Component/Category/Category';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <Category></Category>
        </div>
    );
};

export default Home;