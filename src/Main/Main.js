import React, { Fragment } from "react";
import Post from "../Post/Post";
import "./Main.css";

class Main extends React.Component {
    state = {
        post: []
    }
    componentDidMount() {
        fetch('https://my-json-server.typicode.com/AhmadRafly23/AhmadRafly23/db')
        .then((response) => response.json())
        .then(json => {
            this.setState({
                post: json.plant
            })
        });
    }
    
    render() {
        // console.log(this.state.post)
        return (
            <Fragment>
                <p className="section-title"><span>Ensiklo</span>pedia</p>
                <div className="main">
                {
                    this.state.post.map(post => {
                        return <Post key = {post.id} img={post.image} nama={post.name} />;
                    }
                    )
                }
                </div>
            </Fragment>
        );
    }
}

export default Main;