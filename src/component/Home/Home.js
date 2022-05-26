import React from 'react';
import Bussiness from '../BussinessSummary/Bussiness';
import ReviewDetails from '../Dashboard/ReviewDetails';
import Hero from '../Hero/Hero';
import Tools from '../Tools/Tools';
import Category from './Category';
import Extra from './Extra';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Tools></Tools>
            <Bussiness></Bussiness>
            <ReviewDetails></ReviewDetails>
            <Category></Category>
            <Extra></Extra>
           
        </div>
    );
};

export default Home;