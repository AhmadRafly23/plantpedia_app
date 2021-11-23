import './Home.css';
import React from 'react';

class Home extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="container-left">
                    <h1><span className="plant">Plants</span> make life better</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in.</p>
                    <button className="btn">Explore</button>
                </div>
                <div className="container-right">
                    <img src="/plant.jpg" />
                </div>
            </div>
        );
    }
}

export default Home;