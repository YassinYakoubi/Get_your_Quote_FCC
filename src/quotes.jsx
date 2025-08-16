import React from 'react';
import './quotes.css';
import MyQuotes from './qarray.jsx';

class Quotes extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            counter:0
        }
    }
    handleClick = () => {
        this.setState(prevState => ({
            counter: prevState.counter === MyQuotes.length - 1 ? 0 : prevState.counter + 1
        }));
    }
    
    componentDidMount(){
        this.handleClick();
    }
    render(){
        return (
                <div id="quote-box" >
                    <h1  id="text"  >{MyQuotes[this.state.counter].quote}</h1>
                    <h4 id="author">{MyQuotes[this.state.counter].author}</h4>
                    <button id="new-quote" onClick={this.handleClick}>New quote</button>
                    <i id="tweet-quote" className="fab fa-twitter"  href="twitter.com/intent/tweet"></i>

                </div>  
        );
    }
    
}


export default Quotes;