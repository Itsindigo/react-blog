import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchBlog, deleteBlog } from '../actions/index';
import { Link } from 'react-router-dom';


class BlogDetail extends Component {
    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.fetchBlog(id);
    }

    onDeleteClick() {
        console.log(this);
        const { id } = this.props.match.params;
        this.props.deleteBlog(id, () => {
            this.props.history.push('/');
        });
    }

    render() {
        const { blog } = this.props;

        if (!blog) {
            return (
                <div>Loading...</div>
            );
        }

        return (
            <div>
                <Link to='/'>Back to Index</Link>
                <button 
                    className='btn btn-danger pull-xs-right'
                    onClick={this.onDeleteClick.bind(this)}
                >
                    Delete a Blog.
                </button>
                <h3>{blog.title}</h3>
                <h6>{blog.categories}</h6>
                <p>{blog.content}</p>
            </div>
        );
    }
}

function mapStateToProps({ blogs }, ownProps) {
    return { blog: blogs[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchBlog, deleteBlog })(BlogDetail);