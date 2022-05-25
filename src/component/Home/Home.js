import React from 'react';
import Bussiness from '../BussinessSummary/Bussiness';
import Hero from '../Hero/Hero';
import Tools from '../Tools/Tools';
import Category from './Category';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Tools></Tools>
            <Bussiness></Bussiness>
            <Category></Category>
           
        </div>
    );
};

export default Home;