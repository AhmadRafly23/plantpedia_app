import React, { Fragment } from "react";
import Post from "../Post/Post";

class Main extends React.Component {
    state = {
        post: []
    }
    componentDidMount() {
        fetch('http://localhost:3000/plant')
        .then((response) => response.json())
        .then(json => {
            this.setState({
                post: json
            })
        });
    }
    render() {
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