import React, { Component } from 'react';

class CommentBox extends Component {
    state = {
        comment: ""
    };

    handleChange = e => {
        this.setState({ comment: e.target.value })
    };

    onSubmit = e => {
        e.preventDefault();
        this.setState({ comment: "" });
        //need to call action creator here
        //save the comment to DOM
    };

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <h4>Add a Comment</h4>
                <textarea onChange={this.handleChange} value={this.state.comment} />
                <div>
                    <button>Submit</button>
                </div>
            </form>
        )
    }
};

export default CommentBox;
