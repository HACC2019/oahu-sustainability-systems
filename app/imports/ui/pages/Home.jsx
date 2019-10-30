import React from 'react';
import Navbar from "../components/Navbar";

class Home extends React.Component
{
    render(){
        const returnVal = <div>
            <Header/>
            <Navbar/>

            <Footer/>
        </div>;
        return(
            returnVal
        );
    }
};

export default Home;