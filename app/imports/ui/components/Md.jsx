import React from 'react';
import ReactMarkdown from 'react-markdown';

class Md extends React.Component
{
    render(){
        return(
           <ReactMarkdown src={"#title"}/>
        );
    }
}

export default Md;