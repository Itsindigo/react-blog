import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchBlog } from '../actions/index';
import { Link } from 'react-router-dom';


class BlogDetail extends Component {
    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.fetchBlog(id);
    }

    render() {
        const { blog } = this.props;

        if (!blog) {
            return (
                <div>Loading...</div>
            )
        }

        return (
            <div>
                <Link to='/'>Back to Index</Link>
                <h3>{blog.title}</h3>
                <h6>{blog.categories}</h6>
                <p>{blog.content}</p>
            </div>
        )
    }
}

function mapStateToProps({ blogs }, ownProps) {
    return { blog: blogs[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchBlog })(BlogDetail);