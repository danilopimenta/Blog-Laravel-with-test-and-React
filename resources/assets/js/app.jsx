import axios from 'axios';
import ReactDOM from 'react-dom';
import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {posts: []};
    }

    componentWillMount() {
        axios.get('api/post/all')
            .then( response => this.setState({'posts': response.data}) )
            .catch( error => console.log(error));
    }

    getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    getColor() {
        let colors = ['react', 'angular', 'vue'];

        return colors[this.getRandomNumber(0,3)];
    }

    filter(e) {
        this.setState({'filter': e.target.value});
    }

    render() {

        let posts = this.state.posts;

        if (this.state.filter) {
            posts = posts.filter((post) =>
                post.content.toLowerCase()
                    .includes(this.state.filter.toLowerCase())
            );
        }

        return (
            <div className="content">
                <div className="search center">
                    <span className="fa fa-search"></span>
                    <input id="search" onChange={this.filter.bind(this)} placeholder="search content here ..." autoFocus/>
                </div>
                {posts.map((post, key) =>
                    <Post key={post.id} title={post.title} content={post.content} color={this.getColor()} />)}
            </div>
        );
    }
}

const Post = (props) =>
    <section id={props.color} className="section">
        <div className="logo">
            <img className="image" src={"http://lorempixel.com/100/100/?" + Math.random() } />
            <h2 className="name">{props.title}</h2>
        </div>
        <div className={"intro " + props.color}>
            <p className="text" >{props.content}</p>
        </div>
    </section>
;

ReactDOM.render(<App />, document.getElementById("front"));