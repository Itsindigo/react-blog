import _ from 'lodash';
import React, { Component } from 'react';
import BlogInstance from './blog_instance';
import { connect } from 'react-redux';
import { fetchBlogs } from '../actions/fetch_blogs';

class BlogIndex extends Component {
    componentDidMount() {
        this.props.fetchBlogs();
    }

    renderBlogs() {
        return _.map(this.props.blogs, blog => {
            return (
                <li className='list-group-item' key={blog.id}>
                    {blog.title}
                </li>
            );
        });
    }
    
    render() {
        return (
            <div>
                <ul className='list-group'>
                    {this.renderBlogs()}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { blogs: state.blogs };
}

export default connect(mapStateToProps, {fetchBlogs})(BlogIndex);