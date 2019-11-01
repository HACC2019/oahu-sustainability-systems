import React from 'react';
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Md from '../components/Md';


class About extends React.Component
{
    render(){

        return(
            <div>
                <Header/>
                <Navbar/>
                <Md/>
                <Footer/>
            </div>
        );
    }
}

export default About;