import React, { Fragment } from "react";
import Post from "../Post/Post";

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
                <p className="title">Ensiklopedia</p>
                {
                    this.state.post.map(post => {
                        return <Post img={post.image} nama={post.name} />;
                    }
                    )
                }
            </Fragment>
        );
    }
}

export default Main;