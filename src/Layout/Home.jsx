import React from 'react';
import Banner from '../Component/Banner/Banner';
import Gallery from '../Component/Gallery/Gallery';
import Category from '../Component/Category/Category';
import ReleasedDoll from '../Component/ReleasedDoll/ReleasedDoll';
import AudienceReview from '../Component/AudienceReview/AudienceReview';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <Category></Category>
            <ReleasedDoll></ReleasedDoll>
            <AudienceReview></AudienceReview>
            
        </div>
    );
};

export default Home;