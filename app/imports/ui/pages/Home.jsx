import React from 'react';
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Main from "../components/Main";

class Home extends React.Component
{
    render(){
        return(
            <div>
                <Header/>
                <Navbar/>
                <Main/>
                <Footer/>
            </div>
        );
    }
}

export default Home;