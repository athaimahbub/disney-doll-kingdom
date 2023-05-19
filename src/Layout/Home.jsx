import React from 'react';
import Banner from '../Component/Banner/Banner';
import Gallery from '../Component/Gallery/Gallery';
import Category from '../Component/Category/Category';
import ReleasedDoll from '../Component/ReleasedDoll/ReleasedDoll';
import DollBlog from '../Component/DollBlog/DollBlog';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <Category></Category>
            <ReleasedDoll></ReleasedDoll>
            <DollBlog></DollBlog>
        </div>
    );
};

export default Home;