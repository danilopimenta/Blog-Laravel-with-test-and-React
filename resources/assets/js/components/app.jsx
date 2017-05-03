import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class HelloMessage extends React.Component {
    render() {
        return <div>Hello {this.props.name}</div>;
    }
}

ReactDOM.render(<HelloMessage name="Jane" />, document.getElementsByClassName('title')[0]);